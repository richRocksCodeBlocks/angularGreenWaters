import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
  providers: [SearchService]
})
export class SearchFormComponent implements OnInit {

  
  constructor(private http: HttpClient, private searchService: SearchService) {
  }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.searchService.getPropertyByAddress(form.value.propertyAddress)
      .subscribe(
        value => console.log('from da server: ', value),
        err => console.log('zomg error', err)
      );



    // this.http.get('http://localhost:3000/search').subscribe(
    //   value => console.log('i got this from the server: ', value),
    //   err => console.log('i got this error', err)
    // );
  }
}
