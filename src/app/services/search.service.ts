import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  getPropertyByAddress() {
    this.http.get('localhost:3000/search');
  }

}
