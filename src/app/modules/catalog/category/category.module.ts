import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../../shared/shared.module";
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import { CategoryTreeViewComponent } from './category-tree-view/category-tree-view.component';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";
import {TreeSelectModule} from "primeng/treeselect";



@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryFormComponent,
    CategoryTreeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTreeModule,
    NgbAccordionModule,
    TreeSelectModule
  ]
})
export class CategoryModule { }
