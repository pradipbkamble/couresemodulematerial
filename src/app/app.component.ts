import { Component } from '@angular/core';
import { CourseService } from './service/course.service';
import { Icource } from './interface/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courceobj!:Icource[]
  title = 'couresemodulematerial';
  constructor(private _course:CourseService){
    
  
  



  }
}
