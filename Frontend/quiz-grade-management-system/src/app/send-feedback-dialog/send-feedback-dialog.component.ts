import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Grade } from '../Classes/Grade';
import { Feedback } from '../Classes/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { Exam } from '../Classes/Exam';
import { Student } from '../Classes/Student';

@Component({
  selector: 'app-send-feedback-dialog',
  templateUrl: './send-feedback-dialog.component.html',
  styleUrls: ['./send-feedback-dialog.component.css']
})
export class SendFeedbackDialogComponent {
  comment: string = ''; 

  constructor(
    public dialogRef: MatDialogRef<SendFeedbackDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
