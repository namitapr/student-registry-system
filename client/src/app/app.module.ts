import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { Student } from './student';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddedComponent } from './student-added/student-added.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'new-student', component: NewStudentComponent},
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-added', component: StudentAddedComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    DashboardComponent,
    NewStudentComponent,
    StudentAddedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
