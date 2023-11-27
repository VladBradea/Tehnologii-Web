import { Component, OnInit } from '@angular/core';
import { Student } from '../Classes/Student';
import { StudentService } from '../Services/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit{
  allStudents: Student[] = [];
  students: Student[] = [];
  searchText: string = '';

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.allStudents = response;
        this.students = [...this.allStudents];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  editStudent(student: any) {
    

    console.log('Edit:', student);
  }

  deleteStudent(student: Student) {
    const studentEmail = student.email; // Assuming email is the identifier for a student
    this.studentService.deleteStudentByEmail(studentEmail).subscribe(
      () => {
        // Remove the deleted student from the displayed list
        this.students = this.students.filter(s => s.email !== studentEmail);
        console.log('Student deleted successfully.');
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting student:', error.message);
      }
    );
  }

  filterStudents() {
    this.students = this.allStudents.filter(student =>
      (student.firstName.toLowerCase() + ' ' + student.lastName.toLowerCase()).includes(this.searchText.toLowerCase())
    );
  }
}
