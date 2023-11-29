import { Component, OnInit } from '@angular/core';
import { Grade } from '../Classes/Grade';
import { GradeService } from '../Services/grade.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { GradeDialogComponent } from '../grade-dialog/grade-dialog.component';

@Component({
  selector: 'app-grades-page',
  templateUrl: './grades-page.component.html',
  styleUrls: ['./grades-page.component.css']
})
export class GradesPageComponent implements OnInit{
  allGrades: Grade[] = [];
  grades: Grade[] =  [];

  constructor(private gradeService: GradeService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getGrades();
  }

  public getGrades(): void {
    this.gradeService.getGrades().subscribe(
      (response: Grade[]) => {
        this.allGrades = response;
        this.grades = [...this.allGrades];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  editGrade(grade: Grade): void {
    const dialogRef = this.dialog.open(GradeDialogComponent, {
      width: '600px',
      data: { ...grade }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.gradeService.patchGrade(result.id, result).subscribe(
          updatedGrade => {
            const index = this.grades.findIndex(s => s.id === grade.id);
            this.grades[index] = updatedGrade;
            console.log('Grade edited successfully:', updatedGrade);
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating grade:', error.message);
          }
        );
      }
    });
    }

}
