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
  exams: Exam[] = [];
  selectedCourse: Exam [] = [];
  selectedStudents: Student[] = [];

  constructor(
    public dialogRef: MatDialogRef<ExamChooserDialgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private examService: ExamService
  ) {
    this.exams = data.exams;
    this.selectedStudents = data.selectedStudents;
  }

  getExams(): void {
    this.examService.getExams().subscribe(
      (exams: Exam[]) => {
        this.exams = exams;
      },
      (error) => {
        console.error('Error fetching exams:', error);
      }
    );
  }

  sendSelectedExam(): void {
    if (this.selectedCourse) {
      console.log('Selected Exam:', this.selectedCourse);
      console.log('Selected Students:', this.selectedStudents);
       
      
      this.dialogRef.close({ selectedExam: this.selectedCourse, selectedStudents: this.selectedStudents });
    } else {
      console.log('No exam selected');
    }
  }
}
