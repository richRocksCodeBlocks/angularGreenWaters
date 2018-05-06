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
  propertyInfo = {};
  propertySearched = false;


  // google maps zoom level
  zoom = 12;

  // initial center position for map
  lat = 21.3;
  lng = -157.85;

  // marker for searched property
  currentLat: number;
  currentLng: number;

  constructor(private http: HttpClient, private searchService: SearchService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    this.searchService.getPropertyByAddress(form.value.propertyAddress).subscribe(
      value => {
        console.log('from da server: ', value);
        this.propertySearched = true;
        this.propertyInfo = value[0];
        this.currentLat = Number(value[0].latitude);
        this.currentLng = Number(value[0].longitude);
        // console.log('adsf', value[0].longitude);
      },
      err => console.log('zomg error', err)
    );
  }
}
