import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  get_api(url, body, resType) {
    return this.http.post(url, body, {responseType: resType});
  }
}
