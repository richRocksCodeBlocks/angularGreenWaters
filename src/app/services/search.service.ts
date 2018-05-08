import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient, private router: Router) {}

  getPropertyByAddress(address: string) {
    return this.http.post('/api/search', { address });
  }


}
