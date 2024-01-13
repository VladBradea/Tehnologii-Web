import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Grade } from '../Classes/Grade';

@Component({
  selector: 'app-view-grade-dialog',
  templateUrl: './view-grade-dialog.component.html',
  styleUrls: ['./view-grade-dialog.component.css']
})
export class ViewGradeDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { grade: Grade }) {}
}
