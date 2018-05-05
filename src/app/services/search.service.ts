import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  getPropertyByAddress(address: string) {
    // console.log ('From the service', address);
    return this.http.post('/api/search', { address });
  }
}
