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
    this.i++;
    var userValue = (<HTMLInputElement>document.getElementById('myInput')).value;
    var newItem = new Item();
    newItem.id = this.i;
    newItem.title = userValue;
    this.list.push(newItem);

    console.log(this.list);
  }

}
