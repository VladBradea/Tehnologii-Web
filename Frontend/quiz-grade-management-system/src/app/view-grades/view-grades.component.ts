import { Component, OnInit } from '@angular/core';
import { Grade } from '../Classes/Grade';
import { GradeService } from '../Services/grade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SendFeedbackDialogComponent } from '../send-feedback-dialog/send-feedback-dialog.component';
import { Feedback } from '../Classes/Feedback';
import { FeedbackService } from '../Services/feedback.service';

@Component({
  selector: 'app-view-grades',
  templateUrl: './view-grades.component.html',
  styleUrls: ['./view-grades.component.css']
})
export class ViewGradesComponent implements OnInit{
  grades: Grade[] = [];

  constructor(private gradeService: GradeService, public dialog: MatDialog, private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.getGradesByStudentId(2); 
  }

  public getGradesByStudentId(studentId: number): void {
    this.gradeService.getGradesByStudentId(studentId).subscribe(
      (response: Grade[]) => {
        this.grades = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public sendFeedback(grade: Grade): void {
    const dialogRef = this.dialog.open(SendFeedbackDialogComponent, {
      data: { grade: grade, examId: grade.exam.id }
    });
  
    dialogRef.afterClosed().subscribe((result: string) => {
      if (result) {
      
        const feedback: Feedback = {
          id: 0, 
          exam: grade.exam, 
          student: grade.student, 
          comment: result
        };
  
        this.feedbackService.createFeedback(feedback).subscribe(
          (response: Feedback) => {
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    });
  }
}
