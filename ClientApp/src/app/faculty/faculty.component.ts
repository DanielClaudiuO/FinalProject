import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from './faculty.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['facultyStyle.css']
})
export class FacultyComponent {
  displayedColumns: string[] = ['name', 'phone', 'email', 'dean', 'enrolled', 'actions'];
  dataSource: MatTableDataSource<Faculty>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadFaculty();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteFaculty(faculty: Faculty) {
    this.http.delete(this.baseUrl + 'api/faculties/' + faculty.id).subscribe(result => {
      this.loadFaculty();
    }, error => console.error(error))
  }

  loadFaculty() {
    this.http.get<Faculty[]>(this.baseUrl + 'api/faculties').subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error => console.error(error));
  }
}
