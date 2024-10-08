import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import {SharedModule} from "../../../shared/shared.module";
import { ProductFormComponent } from './product-form/product-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxSliderModule} from "ngx-slider-v2";
import { ProductItemListComponent } from './product-item-list/product-item-list.component';
import { ProductItemFormComponent } from './product-item-form/product-item-form.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    ProductItemListComponent,
    ProductItemFormComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        NgbNavModule,
        NgxSliderModule
    ]
})
export class ProductModule { }
