import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  id: any;
  formData!: FormGroup;

  selectedCategory: any;
  categorySelectList: any;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
              private toastr: ToastrService) {
  }

  ngOnInit() {

    this.createForm();
    this.loadCategories();
    this.load();
  }

  load() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) return;

    this.categoryService.loadForm(this.id).subscribe({
      next: (res: any) => {
        // this.formData.patchValue(res);

        this.populateForm(res);
        this.populateSelectedNodes(res.parentCategoryId);
      }
    });


  }

  private createForm() {
    this.formData = this.fb.group({
      id: [null],
      name: [null],
      parentCategoryId: [null],
      status: [0],
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

    // console.log(this.formData.value);
  }


  submit() {

    // console.log(this.formData.value);

    // return;
    this.categoryService.save(this.formData.value).subscribe({
      next: () => {
        this.toastr.success('saved');
      }
    });
  }

  updateVariation(id: number) {
    console.log('updateVariation ', id);

  }

  get variations(): FormArray {
    return this.formData.get('variations') as FormArray;
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

  onChangeParentCategory() {
    // console.log('selectedNodes ', this.selectedNodes);

    this.formData.patchValue({
      parentCategoryId: this.selectedCategory.id
    });

  }

  private loadCategories() {
    this.categoryService.loadCategorySelectList().subscribe({
      next: res => {
        this.categorySelectList = res;
        // console.log('select list: ', this.nodes);
      }
    });
  }

  private populateSelectedNodes(parentCategoryId: any) {
    if (!parentCategoryId) return;

    this.selectedCategory = this.findNodeById(this.categorySelectList, parentCategoryId);
  }


  private findNodeById(nodes: any[], id: number): any {
    for (let node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children && node.children.length > 0) {
        const foundNode = this.findNodeById(node.children, id);
        if (foundNode) {
          return foundNode;
        }
      }
    }
    return null; // Return null if no node is found
  }
}
