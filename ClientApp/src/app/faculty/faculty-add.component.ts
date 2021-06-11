import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from './faculty.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html'
})
export class FacultyAddComponent {
  

  public faculty: Faculty = <Faculty>{};

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveFaculty() {
    this.http.post(this.baseUrl + 'api/faculties', this.faculty).subscribe(result => {
      this.router.navigateByUrl("/faculty");
    }, error => console.error(error))
  }
}

