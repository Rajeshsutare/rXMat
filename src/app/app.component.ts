import { Component, OnInit, inject} from '@angular/core';
import { CourseService } from './shared/service/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rXMat';

  // private _courseService=inject(CourseService)

  constructor(){}
  ngOnInit(): void {
    // this._courseService.getAllData()
    // .subscribe(res=>{
    //   console.log(res);
      
    // })
  }


}
