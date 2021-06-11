import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.models';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  users: User[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) {
    this.loadUsers();
  }

  public test: boolean;
  loadUsers() {
    this.http.get<User[]>(this.baseUrl + 'api/users').subscribe(result => {
      this.users = result;
      this.test = this.checkLoggedIn()
    }, error => console.error(error));
  }

  checkLoggedIn() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].loggedin == true) {
    console.log("aaa");
        return true
      }
    }
    return false
  }


  allUserID: User;
  logOut() {
    for (let i = 0; i < this.users.length; i++) {
      this.allUserID = this.users[i];
      this.updateUserTest(this.allUserID, false);
      this.router.navigateByUrl("/")
    }
  }

  public updateUserTest(userID, log) {
    userID.loggedIn = log;
    this.http.put<User>(this.baseUrl + 'api/users/' + userID.id, userID).subscribe(result => {
    }, error => console.error(error))
  }
}
