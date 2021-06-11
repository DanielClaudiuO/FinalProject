import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { StudentAddComponent } from './student/student-add.component';
import { StudentComponent } from './student/student.component';
import { StudentEditComponent } from './student/student-edit.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherAddComponent } from './teacher/teacher-add.component';
import { TeacherEditComponent } from './teacher/teacher-edit.component';
import { CourseComponent } from './course/course.component';
import { CourseAddComponent } from './course/course-add.component';
import { CourseEditComponent } from './course/course-edit.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyAddComponent } from './faculty/faculty-add.component';
import { FacultyEditComponent } from './faculty/faculty-edit.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceAddComponent } from './attendance/attendance-add.component';
import { AttendanceEditComponent } from './attendance/attendance-edit.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add.component';
import { UserEditComponent } from './user/user-edit.component';
import { LoginComponent } from './user/login.component';

/*import { TestComponent } from './test/test.component';
*/


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    StudentAddComponent,
    StudentComponent,
    StudentEditComponent,
    TeacherComponent,
    TeacherAddComponent,
    TeacherEditComponent,
    CourseComponent,
    CourseAddComponent,
    CourseEditComponent,
    FacultyComponent,
    FacultyAddComponent,
    FacultyEditComponent,
    AttendanceComponent,
    AttendanceAddComponent,
    AttendanceEditComponent,
    UserComponent,
    UserAddComponent,
    UserEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'student', component: StudentComponent },
    { path: 'student-add', component: StudentAddComponent },
    { path: 'student-edit/:id', component: StudentEditComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'teacher-add', component: TeacherAddComponent },
    { path: 'teacher-edit/:id', component: TeacherEditComponent },
    { path: 'course', component: CourseComponent },
    { path: 'course-add', component: CourseAddComponent },
    { path: 'course-edit/:id', component: CourseEditComponent },
    { path: 'faculty', component: FacultyComponent },
    { path: 'faculty-add', component: FacultyAddComponent },
    { path: 'faculty-edit/:id', component: FacultyEditComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'attendance-add', component: AttendanceAddComponent },
      { path: 'attendance-edit/:id', component: AttendanceEditComponent },
      { path: 'user', component: UserComponent },
      { path: 'user-add', component: UserAddComponent },
      { path: 'user-edit/:id', component: UserEditComponent },
      { path: 'login', component: LoginComponent }
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTableModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatSortModule,
    MatSelectModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatExpansionModule,
   /*MatNativeDateModule*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
