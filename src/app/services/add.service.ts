import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddService {

  constructor(private http: HttpClient) { }

  postPropertyByAddress(address: string) {
    console.log('from the add service', address);
    return this.http.post('/api/post', { address });
  }

}
