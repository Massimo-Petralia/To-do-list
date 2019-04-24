import { Component, HostListener } from '@angular/core';
import {Item} from './item';
import {List} from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = 'To do list'
  list = List;
  i = 0;
  addItem(){
    var userValue = (<HTMLInputElement>document.getElementById('myInput')).value;
    var newItem = new Item();
    newItem.title = userValue;
    this.list.push(newItem);

    var data = JSON.stringify(newItem) ;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 201) {
        console.log(this.responseText);
      }
    }
    http.open('POST', "http://localhost:3000/employees", true);
    http.setRequestHeader("content-type", "application/json");
    http.send(data)
    console.log(data);
  }

}
