import { Component, OnInit } from '@angular/core';
import { CourseService } from './service/course.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isloading=false
  title = 'couresemodulematerial';
  constructor(){

  }
  ngOnInit(): void {
    this.isloading=true
   
    
  }
}
