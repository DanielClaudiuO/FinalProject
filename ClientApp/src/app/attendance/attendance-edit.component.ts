import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from './attendance.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher/teacher.models';
import { Course } from '../course/course.models';

@Component({
  selector: 'app-attendance-edit',
  templateUrl: './attendance-edit.component.html'
})
export class AttendanceEditComponent implements OnInit {

  public attendance: Attendance = <Attendance>{};
  public id: String;
  courses: Course[];
  teachers: Teacher[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadCourse();
    this.loadTeacher();
  }
  
  

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadAttendance();
    })
  }

  public loadAttendance() {
    this.http.get<Attendance>(this.baseUrl + 'api/attendances/' + this.id).subscribe(result => {
      this.attendance = result;
    }, error => console.error(error))

  }
  public editAttendance() {
    this.http.put<Attendance>(this.baseUrl + 'api/attendances/' + this.id, this.attendance).subscribe(result => {
      this.router.navigateByUrl("/attendance");
    }, error => console.error(error))
  }

    loadCourse() {
    this.http.get<Course[]>(this.baseUrl + 'api/courses').subscribe(result => {
      this.courses = result;
    }, error => console.error(error));
  }
  loadTeacher() {
    this.http.get<Teacher[]>(this.baseUrl + 'api/teachers').subscribe(result => {
      this.teachers = result;
    }, error => console.error(error));
  }

}
