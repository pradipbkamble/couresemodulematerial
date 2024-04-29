import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, debounceTime, distinctUntilChanged, of, startWith, switchMap, tap } from 'rxjs';
import { Icource, Ilessons } from 'src/app/interface/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-singlecourse',
  templateUrl: './singlecourse.component.html',
  styleUrls: ['./singlecourse.component.scss']
})
export class SinglecourseComponent implements OnInit {
  courseObj$! : Observable<Icource>;
lessons$! : Observable<Ilessons[]>;
courseid!:string
lessonForm!:FormGroup
  constructor(private _route:ActivatedRoute,private _courses:CourseService ) { }

  ngOnInit(): void {
    this.FormG()
    this.courseid=this._route.snapshot.params['courseId']
this.courseObj$=this._courses.viewsinglecard(this.courseid)
// this.keyup()
this.lessons$=this._courses.lessonsfunct(this.courseid)
this.onSearch()


  

  }
 
  
  FormG(){
this.lessonForm=new FormGroup({
  lesson:new FormControl(null)
})
  }

  onSearch(){
      this.lessons$ =this._courses.lessonsfunct(this.courseid,10,"")
    this.lessons$ =  this.lessonForm.get('lesson')
    ?.valueChanges
    .pipe(
      startWith(''),
    tap((res:any) => console.log(res)),
    debounceTime(1000),
    distinctUntilChanged(),
    switchMap(val =>this._courses.lessonsfunct(this.courseid, 10,val))
    )as Observable<Ilessons[]>
    
    }
  }

//   onSearch(eve : Event){
//     let val = (eve.target as HTMLInputElement).value as string;

//     //debounce operator to provide some time to user instead of every API call

//     let val$ = of(val);
//     val$.pipe(
//       debounceTime(1000),
//       switchMap(str => this._courses.lessonsfunct(this.courseid,10,str)))
// }

