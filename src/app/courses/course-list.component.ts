import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  ngOnInit(): void  {
    this.courses = [
      {
        id: 1,
        name: 'Python na Prática',
        imageUrl: '/assets/images/forms.png',
        price: 12.54,
        code: 'XPS-1243',
        duration: 240,
        rating: 3.1,
        releaseDate: 'September, 8, 2021'
      },
      {
        id: 2,
        name: 'Java na Prática',
        imageUrl: '/assets/images/http.png',
        price: 22.54,
        code: 'XPS-6221',
        duration: 120,
        rating: 4.0,
        releaseDate: 'September, 8, 2021'
      }
    ]
  }


}
