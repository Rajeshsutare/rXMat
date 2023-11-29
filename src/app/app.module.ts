import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http'
import { MaterialsModule } from './shared/materials/materials.module';
import { CourseCardComponent } from './shared/components/course-card/course-card.component';
import { EditCourseComponent } from './shared/components/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CourseCardComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
