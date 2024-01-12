import { Component, OnInit } from '@angular/core';
import { Exam } from '../Classes/Exam';
import { HttpErrorResponse } from '@angular/common/http';
import { ExamService } from '../Services/exam.service';
import { StudentService } from '../Services/student.service';
import { Student } from '../Classes/Student';
import { MatDialog } from '@angular/material/dialog';
import { ExamChooserDialgComponent } from '../exam-chooser-dialg/exam-chooser-dialg.component';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-exams-page',
  templateUrl: './exams-page.component.html',
  styleUrls: ['./exams-page.component.css']
})
export class ExamsPageComponent implements OnInit{
  exams: Exam[] = [];
  students: Student[] = [];
  selectedStudents: Student[] = [];

  constructor(private examService: ExamService, private studentService: StudentService, private dialog: MatDialog, private userDataService: UserDataService) {}

  ngOnInit() {
    this.getExams();
    this.getStudents();
  }

  public getExams(): void {
    this.examService.getExams().subscribe(
      (response: Exam[]) => {
        this.exams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public toggleSelection(student: Student): void {
    if (this.isSelected(student)) {
      this.selectedStudents = this.selectedStudents.filter((s) => s !== student);
    } else {
      this.selectedStudents.push(student);
    }
  }

  public isSelected(student: Student): boolean {
    return this.selectedStudents.includes(student);
  }

  public sendExam(): void {
    const dialogRef = this.dialog.open(ExamChooserDialgComponent, {
      data: {
        exams: this.exams,
        selectedStudents: this.selectedStudents
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Selected Exam:', result.selectedExam);
        console.log('Selected Students:', result.selectedStudents);
       //

      } else {
        console.log('Dialog closed without selection');
      }
    });
  }

  public logout(){
    this.userDataService.logout();
  }

}
