import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['userStyle.css']
})
export class LoginComponent {
  username: string;
  password: string;
  users: User[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>(this.baseUrl + 'api/users').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }

  public logInUser: User;

  checkUser() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.username == this.users[i].username && this.password == this.users[i].password) {
        this.logInUser = this.users[i]
        this.logOutUsers();
        this.updateUserTest(this.logInUser, true)
      }
    }
  }



  allUserID: User;
  logOutUsers() {
    for (let i = 0; i < this.users.length; i++) {
      this.allUserID = this.users[i];
      this.updateUserTest(this.allUserID, false);
    }
  }

  public updateUserTest(userID, log) {
    userID.loggedin = log;
    this.http.put<User>(this.baseUrl + 'api/users/' + userID.id, userID).subscribe(result => {
      this.router.navigateByUrl("/course")
    }, error => console.error(error))
  }
}
