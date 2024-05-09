import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Icource, Icourcepay, Ilessons, IlessonsResp } from '../interface/course';
import { BehaviorSubject, Observable, Subject, map } from 'rxjs';
import { __param } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class CourseService {
  updsub$:Subject<boolean>=new Subject<boolean>()
  loader$:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
baseUrl=`${environment.baseUrlCourses}/courses`
  constructor(private _http:HttpClient) { }
fetchobj():Observable<Icourcepay>{
  return this._http.get<Icourcepay>(this.baseUrl)
}
fetchupdate(updobj:Icource):Observable<Icource>{
let updateUrl=`${this.baseUrl}/${updobj.id}`
return this._http.put<Icource>(updateUrl, updobj)
}
viewsinglecard(courseId:string):Observable<Icource>{
  // this._loaders.loadersub$.next(true)
  let courseUrl =`${this.baseUrl}/${courseId}`
  return this._http.get<Icource>(courseUrl)

}


lessonsfunct(courseId:string ,pageSize:number=1, filter=''):Observable<Ilessons[]>{

let lessionurl=`${environment.baseUrlCourses}/lessons`
let params=new HttpParams()
.set("courseId",courseId)
.set("pageSize",pageSize)
.set("filter",filter)
return this._http.get<IlessonsResp>(lessionurl,{
  params:params
}).pipe(
  map(res=>{
    return res['payload']
  }))
}



}
