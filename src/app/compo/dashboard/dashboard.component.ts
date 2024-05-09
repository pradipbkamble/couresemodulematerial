import { Component, OnInit } from '@angular/core';
import { Observable, map, observable, shareReplay } from 'rxjs';
import { Icource } from 'src/app/interface/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private _course:CourseService) { }
  isloading:boolean=false
cardobj!:Icource[]
begainercourse!:Icource[]
advancecourse!:Icource[]


begainercourse$!:Observable<Array<Icource>>
advancecourse$!:Observable<Array<Icource>>//when we use observable the dont subscribe


  ngOnInit(): void {
    this._course.loader$.subscribe(res=>
      this.isloading=res
    )
  this.courseaddvanbegsimpal()
   this._course.updsub$.subscribe(res=>{
    console.log(res);
    
    if(res){
      this.courseaddvanbegsimpal()
    }
   })
  }

courseaddvanbegsimpal(){
  this._course.fetchobj().subscribe(res=>{
    this.cardobj=res['payload']
this.begainercourse=this.cardobj.filter(res=>res.category==="BEGINNER")
this.advancecourse=this.cardobj.filter(res=>res.category==="ADVANCED")
  })
}
// withasync(){
//   let courses=this._course.fetchobj()
//   .pipe(map(course=>course['payload']),
//   shareReplay()
//   // .pipe(map(cours=>cours.filter((res: { category: string; })=>res.category==="BEGINNER")
//   )
// this.begainercourse$=courses.
// pipe(map(cours=>cours.filter((res: { category: string; })=>res.category==="BEGINNER")))
  
// this.advancecourse$=courses.
// pipe(map(cours=>cours.filter((res: { category: string; })=>res.category==="ADVANCED")))
  
// }
}
