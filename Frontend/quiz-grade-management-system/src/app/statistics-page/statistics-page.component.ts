import { Component, OnInit } from '@angular/core';
import { Exam } from '../Classes/Exam';
import { ExamService } from '../Services/exam.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
  styleUrls: ['./statistics-page.component.css']
})
export class StatisticsPageComponent implements OnInit{

  exams: Exam[] = [];

  constructor(private examService: ExamService){}

  ngOnInit(){
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
