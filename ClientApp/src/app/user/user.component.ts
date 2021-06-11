import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AfterViewInit, ViewChild } from '@angular/core';
import { Teacher } from '../teacher/teacher.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
   styleUrls: ['userStyle.css']
})
export class UserComponent {
  displayedColumns: string[] = ['username', 'password', 'loggedin','actions'];
  dataSource: MatTableDataSource<User>;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadUser();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public deleteUser(user: User) {
    this.http.delete(this.baseUrl + 'api/users/' + user.id).subscribe(result => {
      this.loadUser();
    }, error => console.error(error))
  }

  loadUser() {
    this.http.get<User[]>(this.baseUrl + 'api/users').subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    }, error => console.error(error));
  }
}
