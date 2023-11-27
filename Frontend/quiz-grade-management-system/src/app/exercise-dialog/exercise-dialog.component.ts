import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Exercise } from '../Classes/Exercise';

@Component({
  selector: 'app-exercise-dialog',
  templateUrl: './exercise-dialog.component.html',
  styleUrls: ['./exercise-dialog.component.css']
})
export class ExerciseDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExerciseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Exercise
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
