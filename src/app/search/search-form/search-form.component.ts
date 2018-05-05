import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log(form);
    this.http.get('http://www.google.com').subscribe(
      value => console.log('i got this from the server: ', value),
      err => console.log('i got this error', err)
    );
  }
}
