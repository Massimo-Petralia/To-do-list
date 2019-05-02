import { Component, OnInit } from '@angular/core';
import {Item} from './item.model';
import { HttpClient } from '@angular/common/http';
import { Action } from 'rxjs/internal/scheduler/Action';

type action = 'update' | 'create';

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
  actionType: action;
  itemSelected: Item;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.getData();
    this.title = 'title...';
    this.description = 'description...';
  }

  getData(){
    this.http.get(this.dbUrl).subscribe((items: Item[])=>{// specificare sempre il tipo di dato ricevuto dalla chiamata
      this.items = items;//assegno l'array items alla proprietà this.item
    })
  }
  createItem(item: Item){
    this.http.post(this.dbUrl, item).subscribe((_item: Item)=>{// specificare sempre il tipo di dato ricevuto dalla chiamata
      this.items.push(_item)
    })
  }

  deleteItem(item: Item) {

    this.http.delete(this.dbUrl + `/${item.id}`).subscribe((response)=>{
      this.items = this.items.filter((elem) => elem.id !== item.id)})
  }

  newItem(){
    this.title = null;
    this.description = null;
    this.actionType = 'create';
  }

  selectedItem(item: Item){
    this.itemSelected = item;
    this.title = this.itemSelected.title;
    this.description = this.itemSelected.description;
    this.actionType = 'update';
  }
}
