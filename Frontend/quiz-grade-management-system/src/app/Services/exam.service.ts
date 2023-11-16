import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../Classes/Exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private examUrl = 'http://localhost:8080/api/exams/';

  constructor(private http: HttpClient) { }

  public getExams(): Observable<Exam[]>{
    return this.http.get<Exam[]>(`${this.examUrl}`);
  }

  public createExam(exam: Exam): Observable<Exam>{
    return this.http.post<Exam>(`${this.examUrl}`,exam);
  }

  public getExamById(examId: number): Observable<Exam>{
    return this.http.get<Exam>(`${this.examUrl}id/${examId}`);
  }

  public deleteExam(examId: number): Observable<void>{
    return this.http.delete<void>(`${this.examUrl}id/${examId}`);
  }
}
