import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  generateReport(data: any) {
    return this.httpClient.post(this.url + "/bill/generateReport", data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }

  getPdf(data: any) {
    return this.httpClient.post(this.url + "/bill/getPdf", data, {responseType: 'blob'})
  }
  getBills() {
    return this.httpClient.get(this.url + "/bill/getBills")
  }
}
