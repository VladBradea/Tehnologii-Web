import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../Classes/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private teacherUrl = 'http://localhost:8080/api/teachers/';

  constructor(private http: HttpClient) { }

  public getTeachers(): Observable<Teacher[]>{
    return this.http.get<Teacher[]>(`${this.teacherUrl}`);
  }

  public createTeacher(teacher: Teacher): Observable<Teacher>{
    return this.http.post<Teacher>(`${this.teacherUrl}`,teacher);
  }

  public getTeacherById(teacherId: number): Observable<Teacher>{
    return this.http.get<Teacher>(`${this.teacherUrl}id/${teacherId}`);
  }

  public getTeacherByEmail(teacherEmail: string): Observable<Teacher>{
    return this.http.get<Teacher>(`${this.teacherUrl}email/${teacherEmail}`);
  }

  public deleteTeacherById(teacherId: number): Observable<void>{
    return this.http.delete<void>(`${this.teacherUrl}id/${teacherId}`);
  }

  public deleteTeacherByEmail(teacherEmail: string): Observable<void>{
    return this.http.delete<void>(`${this.teacherUrl}email/${teacherEmail}`);
  }

  public updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.teacherUrl}id/${teacher.id}`, teacher);
  }

  public patchTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.patch<Teacher>(`${this.teacherUrl}id/${teacher.id}`,teacher);
  }
}
