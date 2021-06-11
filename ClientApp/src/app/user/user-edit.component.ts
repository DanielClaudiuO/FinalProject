import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from '../teacher/teacher.models';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) {
  }

  public user: User = <User>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadUser();
    })
  }

  public loadUser() {
    this.http.get<User>(this.baseUrl + 'api/users/' + this.id).subscribe(result => {
      this.user = result;
    }, error => console.error(error))

  }
  public editUser() {
    this.http.put<User>(this.baseUrl + 'api/users/' + this.id, this.user).subscribe(result => {
      this.router.navigateByUrl("/user");
    }, error => console.error(error))

  }

}
