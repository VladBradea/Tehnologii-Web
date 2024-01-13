import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Grade } from '../Classes/Grade';
import { Exercise } from '../Classes/Exercise';
import { Router } from '@angular/router';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-view-grade-dialog',
  templateUrl: './view-grade-dialog.component.html',
  styleUrls: ['./view-grade-dialog.component.css']
})
export class ViewGradeDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { grade: Grade },  private router: Router, private userDataService: UserDataService, private dialogRef: MatDialogRef<ViewGradeDialogComponent>) {}

  public logout() {
    this.userDataService.logout();
    this.router.navigate(['/quizGrade']);
    this.closeDialog();
  }

  backToMenu() {
    this.router.navigate(['/student-main-page']);
    this.closeDialog();
  }

  private closeDialog() {
    this.dialogRef.close();
  }
}
