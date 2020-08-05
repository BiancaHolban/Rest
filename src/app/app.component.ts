import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Item } from './shared';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

   id: string;
   student_name: string;
   nr_abs: string;
   math: string;
   info: string;
   chemistry: string;

   item: JSON;

  save()
  {
    const id_=this.id;
    const student_name_=this.student_name;
    const nr_abs_= this.nr_abs;
    const math_=this.math;
    const info_=this.info;
    const chemistry_=this.chemistry;
    console.log(id_+student_name_+nr_abs_+math_+info_+chemistry_);
    
    const item={
      "id":id_, "student_name":student_name_,
      "nr_abs":nr_abs_, "marks":{ "math":math_,
      "info":info_, "chemistry":chemistry_}
    }

    var theJSON = JSON.stringify(item);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    var a = document.createElement('a');
    a.href = uri;
    a.innerHTML = "Right-click and choose 'save as...'";
    document.body.appendChild(a);
  }
  
}
