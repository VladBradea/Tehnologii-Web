import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Classes/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:8080/api/students/';

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(`${this.studentUrl}`);
  }

  public createStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${this.studentUrl}`,student);
  }

  public getStudentById(studentId: number): Observable<Student>{
    return this.http.get<Student>(`${this.studentUrl}id/${studentId}`);
  }

  public getStudentByEmail(studentEmail: string): Observable<Student>{
    return this.http.get<Student>(`${this.studentUrl}email/${studentEmail}`);
  }

  public deleteStudentById(studentId: number): Observable<void>{
    return this.http.delete<void>(`${this.studentUrl}id/${studentId}`);
  }

  public deleteStudentByEmail(studentEmail: string): Observable<void>{
    return this.http.delete<void>(`${this.studentUrl}email/${studentEmail}`);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.studentUrl}id/${student.id}`, student);
  }

  public patchStudent(id: number, student: Student): Observable<Student> {
    return this.http.patch<Student>(`${this.studentUrl}id/${student.id}`, student);
  }
}
