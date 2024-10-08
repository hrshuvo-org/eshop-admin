import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {ProductItemService} from "../product-item.service";
import {ToastrService} from "ngx-toastr";
import {PaginationParams} from "../../../../shared/models/filter-list";

@Component({
  selector: 'app-product-item-form',
  templateUrl: './product-item-form.component.html',
  styleUrls: ['./product-item-form.component.scss']
})
export class ProductItemFormComponent implements OnInit {
  id: any;
  formData!: FormGroup;

  listFilter: PaginationParams = new PaginationParams();
  productSelectList!: any[];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private productService: ProductService,
              private productItemService: ProductItemService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.createForm();
    this.loadProductList();
    this.load();
  }

  private createForm() {
    this.formData = this.fb.group({
      id: [0],
      productId: [0],
      name: [''],
      description: [''],
      price: [0],
      sku: [''],
      // discountPercentage: [0],
      // discountPrice: [0],
      qtyStock: [0],
      status: [0]
    });

  }

  private loadProductList() {
    this.productService.loadList(this.listFilter).subscribe({
      next: res => {
        this.productSelectList = res.data;
      }
    });

  }

  private load() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) return;

    this.productItemService.loadForm(this.id).subscribe({
      next: res => {
        this.formData.patchValue(res);
        console.log(this.formData.value);
      }
    });

  }


  submit() {
    console.log(this.formData.value);
    this.productItemService.save(this.formData.value).subscribe({
      next: () => {
        this.toastr.success('Save success');
      }
    });
  }


}
