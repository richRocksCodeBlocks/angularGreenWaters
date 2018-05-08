import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {} from '@types/googlemaps';
// tslint:disable-next-line:prefer-const
let google: any;
@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {
// google maps zoom level
zoom: number = 12;

// initial center position for map

lat: number = 21.30;
lng: number = -157.85;



  constructor() { }

  ngOnInit() {

  }

}
