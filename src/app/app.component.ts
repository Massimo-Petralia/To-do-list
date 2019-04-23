import { Component } from '@angular/core';
import {Item} from './item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  header = 'To do list'
  newItem = new Item();
  i = 0;
  addItem(){
    this.i++;
    var userValue = (<HTMLInputElement>document.getElementById('myInput')).value;
    this.newItem.id = this.i;
    this.newItem.title = userValue;
    
    console.log(this.newItem);
    
    var li = document.createElement('li');
    li.innerHTML = this.newItem.id+' '+this.newItem.title;
    document.getElementById('myList').appendChild(li);
    
  }
}
