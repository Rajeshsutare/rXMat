import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Icourse, IcourseRes } from '../../model/model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public courseData !:Array<Icourse>;
  public begineerCourse !:Array<Icourse>;
  public advancedCourse !:Array<Icourse>;


  constructor(private _courseService:CourseService) { }

  ngOnInit(): void {

  this._courseService.getAllData()
    .subscribe(res=>{
      this.courseData = res;
      console.log(this.courseData);
    this.begineerCourse= this.courseData.filter(res=>res.category === 'BEGINNER')
    this.advancedCourse=this.courseData.filter(res=>res.category === 'ADVANCED')
    })
  }

 
  



}
