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
@ViewChild('map') map: ElementRef;


  constructor() { }

  ngOnInit() {
  //   const options = {
  //     center : {lat: 21.3069, lng: -157.8583},
  //     zoom: 8
  //   };
  //   const map = new google.maps.Map(this.map, options);
  }

}
