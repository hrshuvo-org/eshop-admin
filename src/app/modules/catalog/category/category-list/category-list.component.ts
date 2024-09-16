import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../category.service";
import {PaginatedResult} from "../../../../shared/models/pagination";
import {PaginationParams} from "../../../../shared/models/filter-list";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  result: PaginatedResult<any> = new PaginatedResult();
  listFilter: PaginationParams = new PaginationParams();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {

    this.load();
  }

  private load() {
    this.categoryService.loadList(this.listFilter).subscribe({
      next:res =>{
        this.result = res;
      }
    });


  }

  onPageChange(page: number) {
    this.listFilter.PageNumber = page;
    this.load();
  }

  onPageSizeChange(size: number) {
    this.listFilter.PageSize = size;
    this.load();
  }
}
