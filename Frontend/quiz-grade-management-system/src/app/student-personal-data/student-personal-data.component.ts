import { Component } from '@angular/core';
import { Student } from '../Classes/Student';
import { StudentService } from '../Services/student.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-personal-data',
  templateUrl: './student-personal-data.component.html',
  styleUrls: ['./student-personal-data.component.css']
})
export class StudentPersonalDataComponent {
  student: Student | null = null;
  firstStudent: Student| null = null;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    const studentId = 1;
    this.getStudentById(studentId);
  }

  private getStudentById(studentId: number): void {
    this.studentService.getStudentById(studentId).subscribe(
      (response: Student) => {
        this.firstStudent = response;
        this.student = { ...this.firstStudent };
      },
      (error: HttpErrorResponse) => {
        if (error.status === 302) {
          this.student = error.error;
        } else {
          alert(error.message);
        }
      }
    );
  }

}
