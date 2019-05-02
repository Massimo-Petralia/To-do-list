import { Component, OnInit } from '@angular/core';
import {Item} from './item.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  header = 'To do list !';
  items: Item[];

  constructor(private http: HttpClient){}

  ngOnInit(){}

  getData(){

  }
}
