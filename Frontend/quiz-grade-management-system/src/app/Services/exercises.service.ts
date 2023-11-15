import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../Classes/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private exercisesUrl = 'http://localhost:8080/api/exercises/';

  constructor(private http: HttpClient) { }

  public getExercises(): Observable<Exercise[]>{
    return this.http.get<Exercise[]>(`${this.exercisesUrl}`);
  }

  public createExercise(exercise: Exercise): Observable<Exercise>{
    return this.http.post<Exercise>(`${this.exercisesUrl}`,exercise);
  }

  public getExerciseById(exerciseId: number): Observable<Exercise>{
    return this.http.get<Exercise>(`${this.exercisesUrl}id/${exerciseId}`);
  }

  public deleteExercise(exerciseId: number): Observable<void>{
    return this.http.delete<void>(`${this.exercisesUrl}id/${exerciseId}`);
  }

}
