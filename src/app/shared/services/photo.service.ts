import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  loadPhotos(url: string) {
    return this.http.get(this.baseUrl + url);
  }
}
