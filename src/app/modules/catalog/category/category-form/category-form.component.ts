import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  id: any;
  formData!: FormGroup;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private toastr: ToastrService) {
  }

  ngOnInit() {

    this.createForm();
    this.load();
  }

  load() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) return;

    this.categoryService.loadForm(this.id).subscribe({
      next: res => {
        // console.log(res);
        // this.formData.patchValue(res);

        this.populateForm(res);
      }
    });


  }

  private createForm() {
    this.formData = this.fb.group({
      id: [null],
      name: [null],
      parentCategoryId: [null],
      status: [null],
      variations: this.fb.array([])
    });
  }

  private populateForm(data: any) {
    // this.formData.patchValue({
    //   id: data.id,
    //   name: data.name,
    //   parentCategoryId: data.parentCategoryId,
    //   status: data.status
    // });

    this.formData.patchValue(data);

    const variationsArray = this.formData.get('variations') as FormArray;
    data.variations.forEach((variation: any) => {
      const variationForm = this.fb.group({
        id: [variation.id],
        name: [variation.name],
        variationOptions: this.fb.array([])
      });

      const optionsArray = variationForm.get('variationOptions') as FormArray;
      variation.variationOptions.forEach((option: any) => {
        const optionForm = this.fb.group({
          id: [option.id],
          value: [option.value],
          variationId: [option.variationId]
        });
        optionsArray.push(optionForm);
      });

      variationsArray.push(variationForm);
    });

    console.log(this.formData.value);
  }

  get variations(): FormArray {
    return this.formData.get('variations') as FormArray;
  }


  submit() {

    console.log(this.formData.value);


    // return;
    this.categoryService.save(this.formData.value).subscribe({
      next: () => {
        this.toastr.success('saved');
      }
    });
  }


  updateVariation(id:number) {
    console.log('updateVariation ', id);

  }

  getVariationOptions(variation: AbstractControl<any>) {
    // console.log('getVariationOptions ', variation.value);
    return variation.get('variationOptions') as FormArray;
  }

  removeVariationOption(variation: AbstractControl<any>, j: number) {
    console.log('removeVariationOption ', variation.value, j);
    this.getVariationOptions(variation).removeAt(j);
  }

  addVariationOption(variation: AbstractControl<any>) {
    console.log('addVariationOption ', variation.value);
    this.getVariationOptions(variation).push(this.fb.group({
      id: [null],
      value: [null]
    }));
  }


  addVariation() {
    this.variations.push(this.fb.group({
      id: [null],
      name: [null],
      variationOptions: this.fb.array([])
    }));

  }

  removeVariation(variation: AbstractControl<any>) {
    console.log('removeVariation ', variation.value);
    this.variations.removeAt(this.variations.controls.indexOf(variation));
  }




}
