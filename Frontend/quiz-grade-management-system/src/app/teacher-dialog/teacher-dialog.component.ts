import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teacher } from '../Classes/Teacher';

@Component({
  selector: 'app-teacher-dialog',
  templateUrl: './teacher-dialog.component.html',
  styleUrls: ['./teacher-dialog.component.css']
})
export class TeacherDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TeacherDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Teacher
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    const updatedTeacher: Teacher = { id: this.data.id, password: this.data.password, firstName: this.data.firstName, lastName: this.data.lastName, email: this.data.email};
    this.dialogRef.close(updatedTeacher);
  }
}
