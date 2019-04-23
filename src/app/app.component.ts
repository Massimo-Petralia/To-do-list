import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To do list';
  id: number;
  item: string;

  addItem(){
    var userValue = (<HTMLInputElement>document.getElementById('myInput')).value;
    console.log(userValue);
    this.item = userValue;
  }
}
