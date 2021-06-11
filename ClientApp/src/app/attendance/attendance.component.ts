import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Attendance } from './attendance.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Course } from '../course/course.models';
import { Teacher } from '../teacher/teacher.models';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['attendanceStyle.css']
})
export class AttendanceComponent {
  displayedColumns: string[] = ['date', 'course', 'teacher', 'classroom', 'count', 'actions'];
  dataSource: MatTableDataSource<Attendance>;
  courses: Course[];
  teachers: Teacher[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadAttendance();
    this.loadCourse();
    this.loadTeacher();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteAttendance(attendance: Attendance) {
    this.http.delete(this.baseUrl + 'api/attendances/' + attendance.id).subscribe(result => {
      this.loadAttendance();
    }, error => console.error(error))
  }

  loadAttendance() {
    this.http.get<Attendance[]>(this.baseUrl + 'api/attendances').subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
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
