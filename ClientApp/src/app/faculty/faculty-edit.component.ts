import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faculty } from './faculty.models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html'
})
export class FacultyEditComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  public faculty: Faculty = <Faculty>{};
  public id: String;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id,
        this.loadFaculty();
    })
  }

  public loadFaculty() {
    this.http.get<Faculty>(this.baseUrl + 'api/faculties/' + this.id).subscribe(result => {
      this.faculty = result;
    }, error => console.error(error))

  }
  public editFaculty() {
    this.http.put<Faculty>(this.baseUrl + 'api/faculties/' + this.id, this.faculty).subscribe(result => {
      this.router.navigateByUrl("/faculty");
    }, error => console.error(error))

  }

}
