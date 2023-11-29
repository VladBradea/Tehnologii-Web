import { Component,Inject } from '@angular/core';
import { Grade } from '../Classes/Grade';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-grade-dialog',
  templateUrl: './grade-dialog.component.html',
  styleUrls: ['./grade-dialog.component.css']
})
export class GradeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GradeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Grade
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
