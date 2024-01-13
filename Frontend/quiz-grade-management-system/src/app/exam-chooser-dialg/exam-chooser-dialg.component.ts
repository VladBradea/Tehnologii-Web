import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ExamService } from '../Services/exam.service';
import { Exam } from '../Classes/Exam';
import { Student } from '../Classes/Student';

@Component({
  selector: 'app-exam-chooser-dialg',
  templateUrl: './exam-chooser-dialg.component.html',
  styleUrls: ['./exam-chooser-dialg.component.css']
})
export class ExamChooserDialgComponent {
  constructor(
    public dialogRef: MatDialogRef<ExamChooserDialgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
