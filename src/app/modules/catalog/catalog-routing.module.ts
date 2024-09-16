import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {CategoryFormComponent} from "./category/category-form/category-form.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";

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
