import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() totalCount: number = 0;
  @Input() pageSize: number = 10;
  @Input() pageNumber: number = 1;
  @Output() pageChanged = new EventEmitter<number>();
  @Output() pageSizeChanged = new EventEmitter<number>();

  @Input() pageSizeArray = [2, 5, 10, 25, 50, 100, 500];
  isDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(event: any) {
    this.pageChanged.emit(event);
  }

  onPageSizeChanged(event: any) {
    this.pageSizeChanged.emit(event.target.value);
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}
