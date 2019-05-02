import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

type action = 'update' | 'create';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  header = 'To do list'
  items: Item[];
  dbUrl = 'http://localhost:3000/ToDo';
  title: string;
  description: string;
  update: boolean = false;
  actionType: action;
  itemSelected: Item;
  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.getData()
    this.title = 'title...';
    this.description = 'description...'; 
  }
    getData() {
      this.http.get(this.dbUrl).subscribe((items: Item[]) => {
        this.items = items;
        console.log(items);
        
      })
    }
    
    createItem(item: Item) {
    this.http.post(this.dbUrl, item).subscribe((_item: Item) =>{
      this.items.push(_item)
    })
    }

  deleteItem(item: Item) {
      this.http.delete(`${this.dbUrl}/${item.id}`).subscribe((response)=> {
        this.items = this.items.filter(_item => _item.id !== item.id);

        console.log(response)})
  }
  selecItem(item : Item){
    this.itemSelected = item;
     this.title =  this.itemSelected.title;
     this.description =  this.itemSelected.description
     this.actionType = 'update'
  }

  newItem() {
    this.title =  null;
    this.description = null;
    this.actionType = 'create'
  }

  save() {
    if (this.actionType === 'update') {
      const itemToUpdate: Item = {title: this.title, description: this.description, id: this.itemSelected.id}
      console.log('put: ', itemToUpdate) 
      this.http.put(`${this.dbUrl}/${this.itemSelected.id}`, itemToUpdate).subscribe((response)=>{
        this.itemSelected.title = itemToUpdate.title;
         this.itemSelected.description = itemToUpdate.description;
        console.log(this.title);
      })
    } else {
      const itemToCreate: Item = {title: this.title, description: this.description}
      this.createItem(itemToCreate)
      console.log('create: ', itemToCreate) 
    }
  }



  }
  
 
  



  




