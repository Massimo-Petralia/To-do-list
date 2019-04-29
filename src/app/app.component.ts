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
  data: Item[];
  dbUrl = 'http://localhost:3000/ToDo';
  
  
  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getData() 

    }
    getData() {
      this.http.get(this.dbUrl).subscribe(data => {
        console.log(this.data)
      })
    }
  }
  
 
  



  




