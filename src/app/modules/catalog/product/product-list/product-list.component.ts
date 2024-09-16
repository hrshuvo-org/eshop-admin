import {Component, OnInit} from '@angular/core';
import {PaginatedResult} from "../../../../shared/models/pagination";
import {PaginationParams} from "../../../../shared/models/filter-list";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  result: PaginatedResult<any> = new PaginatedResult();
  listFilter: PaginationParams = new PaginationParams();

  constructor(private productService:ProductService) {
  }

  ngOnInit() {

    this.load();
  }

  private load() {
    this.productService.loadList(this.listFilter).subscribe({
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

  getRatingList(n:number){
    return  Array.from({length:n}, () => Math.floor(0)+1);
  }
}
