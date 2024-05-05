import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  add(data: any) {
    return this.httpClient.post(this.apiUrl + "/category/add", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  update(data: any) {
    return this.httpClient.put(this.apiUrl + "/category/update", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getCategories() {
    return this.httpClient.get(this.apiUrl + "/category/get");
  }

  getFilteredCategories() {
    return this.httpClient.get(this.apiUrl + "/category/get?filterValue=true");
  }
}
