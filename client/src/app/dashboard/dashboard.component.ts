import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [ StudentService] 
})

export class DashboardComponent implements OnInit {
  students: Student[];
  student: Student;
  _id: string;
  name: string;
  major: string;
  email: string;
  gradyear: string;
  number: string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {}

}
