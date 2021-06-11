import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from './course.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Teacher } from '../teacher/teacher.models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
   styleUrls: ['courseStyle.css']
})
export class CourseComponent {
  displayedColumns: string[] = ['name', 'credits', 'teacher', 'classroom', 'enrolled', 'actions'];
  dataSource: MatTableDataSource<Course>;
  teachers: Teacher[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
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

  public deleteCourse(course: Course) {
    this.http.delete(this.baseUrl + 'api/courses/' + course.id).subscribe(result => {
      this.loadCourse();
    }, error => console.error(error))
  }

  loadCourse() {
    this.http.get<Course[]>(this.baseUrl + 'api/courses').subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }
  loadTeacher() {
    this.http.get<Teacher[]>(this.baseUrl + 'api/teachers').subscribe(result => {
      this.teachers = result;
    }, error => console.error(error));
  }
}
