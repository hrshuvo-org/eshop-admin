
export class PaginationParams {
  constructor(size:number = 10) {
    this.PageNumber = 1;
    this.PageSize = size;

    this.WithDeleted = false;
  }

  Query!: string;
  PageNumber: number;
  PageSize: number;

  Status!: number;
  WithDeleted: boolean;
}
