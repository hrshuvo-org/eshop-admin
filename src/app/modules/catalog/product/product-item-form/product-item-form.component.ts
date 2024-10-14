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
  photoUrl: any;

  // photoApiUrl = 'products/photos';
  photoApiUrl = 'products/add-photo';
  loadPhotoUrl = 'products/photos';

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
      next: (res: any) => {
        this.formData.patchValue(res);
        this.photoUrl = res.photoUrl;
        // console.log(this.formData.value);
        console.log(res);
      }
    });

  }

  submit() {
    // console.log(this.formData.value);
    this.productItemService.save(this.formData.value).subscribe({
      next: () => {
        this.toastr.success('Save success');
      }
    });
  }


  files: File[] = [];

  onSelect(event: any) {
    // console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    // console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  setMainPhoto(url: string) {
    this.photoUrl = url;
  }
}
