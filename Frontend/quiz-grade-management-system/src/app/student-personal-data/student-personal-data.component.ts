import { Component } from '@angular/core';
import { Student } from '../Classes/Student';
import { StudentService } from '../Services/student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-student-personal-data',
  templateUrl: './student-personal-data.component.html',
  styleUrls: ['./student-personal-data.component.css']
})
export class StudentPersonalDataComponent {
  student: Student | null = null;
  firstStudent: Student| null = null;

  constructor(private studentService: StudentService, private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.getStudentById(this.userDataService.getUserData().id);
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

  public logout(){
    this.userDataService.logout();
  }

}
