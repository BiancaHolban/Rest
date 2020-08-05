import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rest';
  links = [
    ];
  db;
  url= 'http://localhost:3000/items/';

 constructor( private http: HttpClient) {
    this.http.post(this.url,this.db).toPromise().then((data:any)=>{
      console.log(data);
      this.db=data.json;
    });
 }
}
