import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {ProductItemListComponent} from "./product/product-item-list/product-item-list.component";
import {ProductItemFormComponent} from "./product/product-item-form/product-item-form.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        children:[
          {
            path: '',
            component: ProductListComponent,
          },
          {
            path: 'new', component: ProductFormComponent
          },
          {
            path: 'edit/:id', component: ProductFormComponent
          }
        ]
      },
      {
        path: 'items',
        children:[
          {
            path: '',
            component: ProductItemListComponent,
          },
          {
            path: 'new', component: ProductItemFormComponent
          },
          {
            path: 'edit/:id', component: ProductItemFormComponent
          }
        ]
      },
      {
        path: 'categories',
        children: [
          {
            path: '',
            component: CategoryListComponent
          },
          {
            path: 'new', component: CategoryFormComponent
          },
          {
            path: 'edit/:id', component: CategoryFormComponent
          }
        ]
      }

    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule {
}
