import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  moduleId: module.id,
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  providers: [ StudentService] 
})

export class NewStudentComponent implements OnInit {
  students: Student[];
  student: Student;
  name: string;
  major: string;
  email: string;
  gradyear: string;
  number: string;

  constructor(private studentService: StudentService, public router: Router) { }

  addStudent(){
    const newStudent = {
      name: this.name,
      major: this.major,
      email: this.email,
      gradyear: this.gradyear,
      number: this.number,
    }

    this.studentService.addStudent(newStudent)
    .subscribe( student => {
      this.students.push(student);
      this.studentService.getStudents()
      .subscribe(students => this.students = students);
    });

    this.router.navigate(['./student-added']);


  }

  ngOnInit() {}

}
