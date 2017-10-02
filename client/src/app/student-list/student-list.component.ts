import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  moduleId: module.id,
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  providers: [ StudentService] 
})

export class StudentListComponent implements OnInit {
  students: Student[];
  student: Student;
  name;
  major: string;
  email: string;
  gradyear: string;
  number: string;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(students => this.students = students);

  }

}
