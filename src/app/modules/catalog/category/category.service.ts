import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginatedResult} from "../../../shared/models/pagination";
import {PaginationParams} from "../../../shared/models/filter-list";
import {AppHelperService} from "../../../shared/services/app-helper.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private helper: AppHelperService) {
  }

  loadList(filter: PaginationParams): Observable<PaginatedResult<any>> {
    const params = this.helper.GetHttpParams(filter);

    return this.http.get<PaginatedResult<any>>(this.baseUrl + 'categories', {params});
  }


  loadForm(id: any) {
    return this.http.get(this.baseUrl + `categories/${id}`);
  }

  save(value:any):Observable<any> {
    return this.http.post(this.baseUrl + `categories/save`, value);
  }

  loadCategoryTree() {
    return this.http.get(this.baseUrl + `categories/tree`);
  }
}
