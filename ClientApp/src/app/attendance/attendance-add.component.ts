import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from './attendance.models';
import { Router } from '@angular/router';
import { Course } from '../course/course.models';
import { Teacher } from '../teacher/teacher.models';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-attendance-add',
  templateUrl: './attendance-add.component.html'
})
export class AttendanceAddComponent {
  courses: Course[];
  teachers: Teacher[];
  public attendance: Attendance = <Attendance>{};
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
    this.loadCourse();
    this.loadTeacher();

  }

  public saveAttendance() {
    this.http.post(this.baseUrl + 'api/attendances', this.attendance).subscribe(result => {
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

