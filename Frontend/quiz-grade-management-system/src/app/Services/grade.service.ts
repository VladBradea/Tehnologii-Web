import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grade } from '../Classes/Grade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GradeService {
  private gradeUrl = 'http://localhost:8080/api/grades/';

  constructor(private http: HttpClient) { }

  public getGrades(): Observable<Grade[]>{
    return this.http.get<Grade[]>(`${this.gradeUrl}`);
  }

  public createGrade(grade: Grade): Observable<Grade>{
    return this.http.post<Grade>(`${this.gradeUrl}`,grade);
  }

  public getGradesById(gradeId: number): Observable<Grade>{
    return this.http.get<Grade>(`${this.gradeUrl}id/${gradeId}`);
  }

  public getGradeByExamId(examId: number): Observable<Grade>{
    return this.http.get<Grade>(`${this.gradeUrl}examId/${examId}`);
  }

  public getGradesByStudentId(studentId: number): Observable<Grade[]>{
    return this.http.get<Grade[]>(`${this.gradeUrl}studentId/${studentId}`);
  }

  public getGradeByExamAndStudentId(examId: number, studentId: number): Observable<Grade>{
    return this.http.get<Grade>(`${this.gradeUrl}examId/${examId}studentId${studentId}`);
  }

  public deleteGradeById(gradeId: number): Observable<void>{
    return this.http.delete<void>(`${this.gradeUrl}id/${gradeId}`);
  }

  public deleteGradeByStudentId(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.gradeUrl}studentId/${studentId}`);
  }

  public updateGrade(grade: Grade): Observable<Grade> {
    return this.http.put<Grade>(`${this.gradeUrl}id/${grade.id}`, grade);
  }

  public patchGrade(id: number, grade: Grade): Observable<Grade> {
    return this.http.patch<Grade>(`${this.gradeUrl}id/${grade.id}`, grade);
  }

  public deleteAllGrades(): Observable<void>{
    return this.http.delete<void>(`${this.gradeUrl}`);
  }

  public getGradesAverageByExamId(examId: number): Observable<Grade>{
    return this.http.get<Grade>(`${this.gradeUrl}average/examId/${examId}`);
  }

}
