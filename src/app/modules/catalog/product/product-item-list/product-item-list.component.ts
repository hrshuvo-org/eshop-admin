import {Component, OnInit} from '@angular/core';
import {PaginatedResult} from "../../../../shared/models/pagination";
import {PaginationParams} from "../../../../shared/models/filter-list";
import {ProductItemService} from "../product-item.service";

@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {
  result: PaginatedResult<any> = new PaginatedResult();
  listFilter: PaginationParams = new PaginationParams();

  constructor(private productItemService: ProductItemService) {
  }

  ngOnInit() {
    this.load();
  }


  private load() {
    this.productItemService.loadList(this.listFilter).subscribe({
      next: res => {
        this.result = res;
        console.log(this.result);
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

  getRatingList(n: number) {
    return Array.from({length: n}, () => Math.floor(0) + 1);
  }

}
