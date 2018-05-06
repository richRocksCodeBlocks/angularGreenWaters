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
// building_name = '';
// city = '';
// g_city = '';
// g_county = '';
// g_neighborhood = '';
// g_placeid = '';
// g_state = '';
// g_street_name = '';
// g_street_number = '';
// latitude = '';
// longitude = '';
// property_id;
// state = '';
// street_address = '';
// zip;
propertyInfo;
propertySearched = false;

// google maps zoom level
zoom: number = 12;

// initial center position for map

lat: number = 21.30;
lng: number = -157.85;



  constructor(private http: HttpClient, private searchService: SearchService) {
  }

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.searchService.getPropertyByAddress(form.value.propertyAddress)
      .subscribe(
        value => {console.log('from da server: ', value );
          this.propertySearched = true;
          this.propertyInfo = value[0];
          // console.log('this.propertyInfo', this.propertyInfo);
        },
        err => console.log('zomg error', err)
      );



    // this.http.get('http://localhost:3000/search').subscribe(
    //   value => console.log('i got this from the server: ', value),
    //   err => console.log('i got this error', err)
    // );
  }
}
