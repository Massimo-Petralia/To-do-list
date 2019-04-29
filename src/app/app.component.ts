import { Component, HostListener, OnInit } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';


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
  
  constructor(private http: HttpClient){}

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
    this.http.post(this.dbUrl, item).subscribe((item: Item) =>{
    item = item;
    })
    }

  }
  
 
  



  




