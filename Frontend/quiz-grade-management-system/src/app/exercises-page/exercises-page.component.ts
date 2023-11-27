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
   allExercises: Exercise[]= [];
   searchText: string = '';

  constructor(private exercisesService: ExercisesService){}

  ngOnInit() {
    this.getExercises();
  }

  public getExercises(): void{
    this.exercisesService.getExercises().subscribe(
      (response: Exercise[])=>{
        this.allExercises = response;
        this.exercises = [...this.allExercises];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  filterExercises() {
    this.exercises = this.allExercises.filter(exercise =>
      (exercise.text.toLowerCase()).includes(this.searchText.toLowerCase())
    );
  }

  deleteExercise(exerciseId: number) {
    this.exercisesService.deleteExercise(exerciseId).subscribe(
      () => {
        this.exercises = this.exercises.filter(exercise => exercise.id !== exerciseId);
        console.log('Exercise deleted successfully.');
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting exercise:', error.message);
      }
    );
  }
  

    editExercise(_t18: Exercise) {
    throw new Error('Method not implemented.');
    }
  

}
