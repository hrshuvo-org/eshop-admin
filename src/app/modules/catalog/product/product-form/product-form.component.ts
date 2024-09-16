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

    this.productService.save(this.formData.value).subscribe({
      next: () =>{
        this.toastr.success('Saved');
      }
    });

  }

  private createForm() {
    this.formData= this.fb.group({
      id:[null],
      name:[null],
      status:[null],
      categoryId:[null],
      category:[null],
      description:[null],
      rating:[null],
      discountType:[0],
      discountPercentage:[null],
      discountFlat:[null],
      price:[null],
      priceAfterDiscount:[null],
      discountInfo:[null],
      availableStatus:[null],
      available:[null],
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
