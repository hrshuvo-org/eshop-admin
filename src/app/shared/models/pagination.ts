export interface IPaginatedResult<T> {
  pageIndex:number,
  pageSize:number,
  count:number,
  // totalPage:number,
  data: T[]
}

export class PaginatedResult<T> implements IPaginatedResult<T>{
  pageIndex: number = 1;
  pageSize: number = 2;
  count: number = 0;
  data: T[] = [];
}
