import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Icource } from 'src/app/interface/course';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss']
})
export class CourseDialogComponent implements OnInit {

  courcedata!:Icource;
  courseForm!:FormGroup
  constructor(@Inject(MAT_DIALOG_DATA) datac: Icource,private fb:FormBuilder,
  private _courseser:CourseService, private _dialogref:MatDialogRef<CourseDialogComponent>) { 
    this.formfolder()
    console.log(datac);
    this.courcedata=datac
    this.courseForm.patchValue(this.courcedata)
    
  }

  ngOnInit(): void {
    
  }

formfolder(){
  this.courseForm=this.fb.group({
    description:['',Validators.required],
    category:['',Validators.required],
    releasedDate:['',Validators.required],
    longDescription:["",Validators.required]
  })
}
 get f(){
  return this.courseForm.controls
}
updatefun(){
let updobj={...this.courseForm.value,id:this.courcedata.id}
this._courseser.fetchupdate(updobj).subscribe(res=>{
  console.log(res);
  this._courseser.updsub$.next(true)
  this._dialogref.close(updobj)
})
}
close(){
  this._dialogref.close()
}
}
