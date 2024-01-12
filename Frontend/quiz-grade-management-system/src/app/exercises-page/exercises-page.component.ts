import { Component, OnInit } from '@angular/core';
import { Exercise } from '../Classes/Exercise';
import { ExercisesService } from '../Services/exercises.service';
import { HttpErrorResponse, HttpRequest, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ExerciseDialogComponent } from '../exercise-dialog/exercise-dialog.component';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-exercises-page',
  templateUrl: './exercises-page.component.html',
  styleUrls: ['./exercises-page.component.css']
})
export class ExercisesPageComponent implements OnInit{

   exercises: Exercise[] = [];
   allExercises: Exercise[]= [];
   searchText: string = '';

  constructor(private exercisesService: ExercisesService,
    public dialog: MatDialog, private userDataService: UserDataService){}

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
  

  editExercise(exercise: Exercise): void {
    const dialogRef = this.dialog.open(ExerciseDialogComponent, {
      width: '600px',
      data: { ...exercise }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exercisesService.patchExercise(result.id, result).subscribe(
          updatedExercise => {
            const index = this.exercises.findIndex(e => e.id === updatedExercise.id);
            this.exercises[index] = updatedExercise;
            console.log('Exercise edited successfully:', updatedExercise);
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating exercise:', error.message);
          }
        );
      }
    });
  }

  addExercise(): void {
    const dialogRef = this.dialog.open(ExerciseDialogComponent, {
      width: '600px',
      data: { exam: { id: 1 }, text: '', option1: '', option2: '', option3: '', option4: '', answer: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.exercisesService.createExercise(result).subscribe(
          newExercise => {
            this.allExercises.push(newExercise);
            this.exercises = [...this.allExercises];
            console.log('Exercise added successfully:', newExercise);
          },
          (error: HttpErrorResponse) => {
            console.error('Error adding exercise:', error.message);
          }
        );
      }
    });
  }

  public logout(){
    this.userDataService.logout();
  }

}
