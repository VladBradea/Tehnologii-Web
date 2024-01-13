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


  constructor(private examService: ExamService, private dialog: MatDialog, private userDataService: UserDataService) {}

  ngOnInit() {
    this.getExams();
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

  public viewCode(examId: number): void {
    const dialogRef = this.dialog.open(ExamChooserDialgComponent, {
      width: '600px',
      height: '400px',
      data: { examId }
    });
  }

  public deleteExam(examId: number){
    this.examService.deleteExam(examId).subscribe(
      () => {
        this.exams = this.exams.filter(exam => exam.id !== examId);
        console.log('Exercise deleted successfully.');
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting exercise:', error.message);
      }
    );
  }

 


  public logout(){
    this.userDataService.logout();
  }

}
