import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { EditCourseComponent } from './shared/components/edit-course/edit-course.component';

const routes: Routes = [
  {path:"", 
  component:DashboardComponent,
  title:'Dashboard'
  },
  {path:"editCourse", 
  component:EditCourseComponent,
  title:'editCourse'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
