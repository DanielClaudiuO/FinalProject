import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher/teacher.models';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadTeacher();
  }

  public course: Course = <Course>{};
  public id: String;
  teachers: Teacher[];

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadCourse();
    })
  }

  public loadCourse() {
    this.http.get<Course>(this.baseUrl + 'api/courses/' + this.id).subscribe(result => {
      this.course = result;
    }, error => console.error(error))

  }
  public editCourse() {
    this.http.put<Course>(this.baseUrl + 'api/courses/' + this.id, this.course).subscribe(result => {
      this.router.navigateByUrl("/course");
    }, error => console.error(error))

  }

  loadTeacher() {
    this.http.get<Teacher[]>(this.baseUrl + 'api/teachers').subscribe(result => {
      this.teachers = result;
    }, error => console.error(error));
  }

}
