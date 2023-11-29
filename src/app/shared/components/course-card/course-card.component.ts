import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../model/model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {

  @Input('cardData') cardData !:Array<Icourse>
  constructor() { }

  ngOnInit(): void {
  }

}
