import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AddService } from '../../services/add.service';





@Component({
  selector: 'app-post-property',
  templateUrl: './post-property.component.html',
  styleUrls: ['./post-property.component.css']
})
export class PostPropertyComponent implements OnInit {

  constructor(private Http: HttpClient, private addService: AddService) { }

  ngOnInit() {}
    onSubmit(form: NgForm) {
      console.log('component', form.value);
  }

}
