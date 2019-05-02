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
  dbUrl = 'http://localhost:3000/ToDo';
  title: string;
  description: string;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getData();
    this.title = 'title...';
    this.description = 'description...';
  }

  getData(){
    this.http.get(this.dbUrl).subscribe((items: Item[])=>{
      this.items = items;//assegno l'array items alla proprietà this.item
    })
  }
  createItem(item: Item){}
}
