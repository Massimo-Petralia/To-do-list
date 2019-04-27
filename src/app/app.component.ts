import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  header = 'To do list'
  url = 'http://localhost:3000/employees';
  users: IUser[];
  name: string;
  salary: string;
  
  constructor(private http: HttpClient){}

  ngOnInit() {}
  
  getData() {
   this.http.get(this.url).subscribe((users: IUser[]) => {
     this.users = users
     console.log(this.users);
   });
  }
  
  postUser(user: IUser) {
    this.http.post('http://localhost:3000/employees', user).subscribe(data => {
      console.log(data)
    })
  }

  createUser() {
    const user: IUser = {name: this.name, salary: this.salary}
    this.postUser(user);
  }
  
  deleteUser(user: IUser) {
    this.http.delete('http://localhost:3000/employees/18').subscribe(data =>{console.log(data)});
  }

}

