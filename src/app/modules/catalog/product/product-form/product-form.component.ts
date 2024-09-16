import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProductService} from "../product.service";
import {Options} from "ngx-slider-v2";
import {CategoryService} from "../../category/category.service";
import {PaginationParams} from "../../../../shared/models/filter-list";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{
  id: any;
  formData!:FormGroup;

  categoryList!:any[];


  constructor(private fb:FormBuilder,
              private  route: ActivatedRoute,
              private productService:ProductService,
              private categoryService:CategoryService,
              private toastr: ToastrService) {
  }
  ngOnInit(): void {
    this.createForm();
    this.loadCategoryList();
    this.load();
  }

  private load() {
    this.id = this.route.snapshot.paramMap.get('id');
    if(!this.id) return;

    this.productService.loadForm(this.id).subscribe({
      next: res =>{
        this.formData.patchValue(res);
        // console.log(this.formData.value);

        this.dynamicvalue = this.formData.get('discountPercentage')?.value;
      }
    });



  }

  submit() {
    console.log(this.formData.value);

    this.productService.save(this.formData.value).subscribe({
      next: () =>{
        this.toastr.success('Saved');
      }
    });

  }

  private createForm() {
    this.formData= this.fb.group({
      id:[0],
      name:[null],
      status:[0],
      categoryId:[0],
      category:[null],
      description:[null],
      rating:[0],
      discountType:[0],
      discountPercentage:[0],
      discountFlat:[0],
      price:[0],
      priceAfterDiscount:[0],
      discountInfo:[null],
      availableStatus:[0],
      available:[0],
      specification:[null]
    });
  }

  private loadCategoryList(){
    let filter = new PaginationParams(500);

    this.categoryService.loadList(filter).subscribe({
      next: res =>{
        this.categoryList = res.data;
      }
    });

  }



  dynamicvalue: number = 0;
  dynamicoptions: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    getSelectionBarColor: (value: number): string => {
      if (value <= 30) {
        return 'red';
      }
      if (value <= 60) {
        return 'orange';
      }
      if (value <= 90) {
        return 'yellow';
      }
      return '#2AE02A';
    }
  };



}
