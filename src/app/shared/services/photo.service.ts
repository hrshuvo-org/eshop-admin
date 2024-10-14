import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  loadPhotos(url: string) {
    return this.http.get(this.baseUrl + url);
  }

  setMainPhoto(id: string, photoId: string) :Observable<any> {
    return this.http.get(this.baseUrl + `products/set-main-photo/${id}/${photoId}`);
  }
}
