import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Student } from './student';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

    constructor(private http: Http) { }    
    // retrieving Student List
    getStudents(){
      return this.http.get('http://localhost:3000/api/student-list').map(res => res.json());
    }

    // add student method
    addStudent(newStudent){
      var headers = new Headers();
      headers.append('Student-Type', 'application/json');
      return this.http.post('http://localhost:3000/api/new-student', newStudent).map(res => res.json());
    }

    // delete student method
    deleteStudent(id){
      return this.http.delete('http://localhost:3000/api/students'+id).map(res => res.json());
    }

}
