import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpParams} from "@angular/common/http";
import {PaginationParams} from "../models/filter-list";

@Injectable({
  providedIn: 'root'
})
export class AppHelperService {
  constructor(private router: Router) {
  }


  GetHttpParams(listFilter: PaginationParams) {
    let params = new HttpParams();

    if (!listFilter) return params;
    if (listFilter.Query)
      params = params.append('Query', listFilter.Query);

    if (listFilter.PageNumber)
      params = params.append('PageNumber', listFilter.PageNumber);

    if (listFilter.PageSize)
      params = params.append('PageSize', listFilter.PageSize);

    if (listFilter.Status)
      params = params.append('Status', listFilter.Status);

    if (listFilter.WithDeleted)
      params = params.append('WithDeleted', listFilter.WithDeleted);

    return params;
  }
}
