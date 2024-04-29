import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Icource } from 'src/app/interface/course';
import { CourseService } from 'src/app/service/course.service';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

@Input()courcesss!:Icource
  constructor(private _courceser:CourseService,private _dialog:MatDialog) { }

  ngOnInit(): void {

  }
  onedt(){
let dialogref=new MatDialogConfig()
dialogref.data=this.courcesss
const dialogconf=this._dialog.open(CourseDialogComponent,dialogref)
dialogconf.afterClosed().subscribe(res=>{
  console.log('updated cource', res);
  this.courcesss=res
  
})


  }
  viewcard(){}
}
