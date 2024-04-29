import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './compo/dashboard/dashboard.component';
import { SinglecourseComponent } from './compo/singlecourse/singlecourse.component';

const routes: Routes = [

  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"course/:courseId",
    component:SinglecourseComponent
  },
  {
    path:"**",
    redirectTo:""
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
