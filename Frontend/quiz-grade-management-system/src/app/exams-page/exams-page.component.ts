import { Component, OnInit } from '@angular/core';
import { Exam } from '../Classes/Exam';
import { HttpErrorResponse } from '@angular/common/http';
import { ExamService } from '../Services/exam.service';

@Component({
  selector: 'app-exams-page',
  templateUrl: './exams-page.component.html',
  styleUrls: ['./exams-page.component.css']
})
export class ExamsPageComponent implements OnInit{
  exams: Exam[] = [];

  constructor(private examService: ExamService){}

  ngOnInit() {
    this.getExams();
  }

  public getExams(): void{
    this.examService.getExams().subscribe(
      (response: Exam[])=>{
        this.exams = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
