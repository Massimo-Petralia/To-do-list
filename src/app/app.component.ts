import { Component, HostListener, OnInit, Input } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';



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
  
  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.getData() 
  }
    getData() {
      this.http.get(this.dbUrl).subscribe((items: Item[]) => {
        this.items = items;
        console.log(items);
        
      })
    }
    
    createItem() {
    const item: Item = {title: this.title}
    this.http.post(this.dbUrl, item).subscribe((_item: Item) =>{
      this.items.push(_item)
    })
    }

    deleteItem(item: Item) {
      this.http.delete(`${this.dbUrl}/${item.id}`).subscribe((response)=> {
        this.items = this.items.filter(_item => _item.id !== item.id);

        console.log(response)})
    }

  }
  
 
  



  




