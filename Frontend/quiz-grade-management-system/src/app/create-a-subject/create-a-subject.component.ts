import { Component, OnInit } from '@angular/core';
import { ExamService } from '../Services/exam.service';
import { Exam } from '../Classes/Exam';
import { Teacher } from '../Classes/Teacher';
import { UserDataService } from '../Services/user-data.service';
import { ExercisesService } from '../Services/exercises.service';
import { Exercise } from '../Classes/Exercise';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-a-subject',
  templateUrl: './create-a-subject.component.html',
  styleUrls: ['./create-a-subject.component.css']
})
export class CreateASubjectComponent implements OnInit{

  teacher1: Teacher[] = [];
  exercises: Exercise[] = [];

 constructor(private examService: ExamService, private userDataService: UserDataService, private exercisesService: ExercisesService) {}

  ngOnInit(){
    this.getExercises();
  }

  private getExercises(): void{
    this.exercisesService.getExercises().subscribe(
      (response: Exercise[])=>{
        this.exercises = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 newExam: Exam = {
   id: 0,
   course: '',
   teacher: { 
    id: this.userDataService.getUserData().id,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
   },
   examDate: '',
   grade: ''
 };

 createExam() {
   this.examService.createExam(this.newExam)
     .subscribe(
       (createdExam: Exam) => {
         console.log('Exam created successfully:', createdExam);
       },
       (error) => {
         console.error('Error creating exam:', error);
       }
     );
 }

 public logout(){
  this.userDataService.logout();
}

}
