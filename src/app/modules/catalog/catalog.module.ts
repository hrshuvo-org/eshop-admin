import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductModule} from "./product/product.module";
import {CatalogRoutingModule} from "./catalog-routing.module";
import {CategoryModule} from "./category/category.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    ProductModule,
    CategoryModule
  ],
  exports:[
    ProductModule,
    CategoryModule
  ]
})
export class CatalogModule { }
