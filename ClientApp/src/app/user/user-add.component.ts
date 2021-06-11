import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent {
 
  public user: User = <User>{};
  users: User[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) {
    this.loadUsers();
  }

  public saveUser() {
    this.logOutUsers()
    this.user.loggedin = true;
    this.http.post(this.baseUrl + 'api/users', this.user).subscribe(result => {
      this.router.navigateByUrl("/user");
    }, error => console.error(error))
  }

  loadUsers() {
    this.http.get<User[]>(this.baseUrl + 'api/users').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }

  allUserID: User;
  logOutUsers() {
    for (let i = 0; i < this.users.length; i++) {
      this.allUserID = this.users[i];
      this.updateUserTest(this.allUserID, false);
      console.log(this.users[i].id);
    }
  }

  public updateUserTest(userID, log) {
    userID.loggedin = log;
    this.http.put<User>(this.baseUrl + 'api/users/' + userID.id, userID).subscribe(result => {
      /*this.router.navigateByUrl("/courses")*/
    }, error => console.error(error))
  }
}

