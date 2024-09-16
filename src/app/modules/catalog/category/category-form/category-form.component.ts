import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotifierService} from "angular-notifier";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit{
  id: any;
  formData!:FormGroup;

  constructor(private fb:FormBuilder,
    private  route: ActivatedRoute,
    private categoryService:CategoryService,
              private toastr: ToastrService) {
  }
  ngOnInit() {

    this.createForm();
    this.load();
  }

  load(){
    this.id = this.route.snapshot.paramMap.get('id');
    if(!this.id) return;

    this.categoryService.loadForm(this.id).subscribe({
      next: res =>{
        // console.log(res);
        this.formData.patchValue(res);
      }
    });


  }

  private createForm() {
    this.formData= this.fb.group({
      id:[null],
      name:[null],
      status:[null]
    });
  }


  submit() {
    this.categoryService.save(this.formData.value).subscribe({
      next: () =>{
        this.toastr.success('saved');
      }
    });
  }
}
