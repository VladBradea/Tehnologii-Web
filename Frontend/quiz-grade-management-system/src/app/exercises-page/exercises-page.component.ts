import { Component, OnInit } from '@angular/core';
import { Exercise } from '../Classes/Exercise';
import { ExercisesService } from '../Services/exercises.service';
import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.css']
})
export class ExercisesPageComponent implements OnInit{
   exercises: Exercise[] = [];

  constructor(private exercisesService: ExercisesService){}

  ngOnInit() {
    this.getExercises();
  }

  public getExercises(): void{
    this.exercisesService.getExercises().subscribe(
      (response: Exercise[])=>{
        this.exercises = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


}
