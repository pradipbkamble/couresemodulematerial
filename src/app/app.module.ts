import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './compo/card/card.component';
import { DashboardComponent } from './compo/dashboard/dashboard.component';

import { CourseDialogComponent } from './compo/course-dialog/course-dialog.component';
import { CourseFormComponent } from './compo/course-form/course-form.component';
import { courcemodul } from './courcemodule.modules.ts/course.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglecourseComponent } from './compo/singlecourse/singlecourse.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,

    CourseDialogComponent,
    CourseFormComponent,
    SinglecourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    courcemodul,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
