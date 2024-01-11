import { Component, OnInit } from '@angular/core';
import { Exam } from '../Classes/Exam';
import { ExamService } from '../Services/exam.service';
import { HttpErrorResponse } from '@angular/common/http';
import { GradeService } from '../Services/grade.service';
import { Grade } from '../Classes/Grade';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit {

  exams: Exam[] = [];
  examAverages: { [examId: number]: number } = {};

  constructor(private examService: ExamService, private gradeService: GradeService) {}

  ngOnInit() {
    this.getExams();
  }

  public getExams(): void {
    this.examService.getExams().subscribe(
      (response: Exam[]) => {
        this.exams = response;
        this.exams.forEach(exam => {
          this.getAverageGrades(exam);
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching exams:', error);
      }
    );
  }

  public getAverageGrades(exam: Exam): void {
    this.gradeService.getGradesAverageByExamId(exam.id).subscribe(
      (grade: Grade) => {
        console.log(`Average grade for exam ${exam.id}:`, grade);
        exam.grade =' '+ grade; // Update the grade property in the exam directly
      },
      (error: HttpErrorResponse) => {
        console.error(`Error fetching average grade for exam ${exam.id}:`, error);
      }
    );
  }
}
