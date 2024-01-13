import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../Services/exam.service';
import { ExercisesService } from '../Services/exercises.service';
import { Exam } from '../Classes/Exam';
import { Exercise } from '../Classes/Exercise';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDataService } from '../Services/user-data.service';
import { FormsModule } from '@angular/forms';
import { GradeService } from '../Services/grade.service';
import { Grade } from '../Classes/Grade';
@Component({
  selector: 'app-send-code-page',
  templateUrl: './send-code-page.component.html',
  styleUrls: ['./send-code-page.component.css']
})
export class SendCodePageComponent {
  enteredExamId: string = '';
  exam: Exam | null = null;
  exercises: Exercise[] = [];
  selectedAnswers: { [key: number]: string } = {};
  constructor(private examService: ExamService, private exercisesService: ExercisesService, private userDataService: UserDataService, private gradeService: GradeService) { }

  checkAndOpenExam() {
    const enteredIdAsNumber = Number(this.enteredExamId);
    if (!isNaN(enteredIdAsNumber)) {
      console.log('Fetching exam details...');
      this.examService.getExamById(enteredIdAsNumber).subscribe(
        exam => {
          if (exam) {
            console.log('Exam details fetched:', exam);

            this.exam = exam;

            // Use getExercisesByExamId method to fetch exercises
            this.tryGetExercisesByExamId(exam.id);

          } else {
            console.log('Exam not found');
          }
        },
        error => {
          if (error.status === 302 && error.error) {
            console.log('Redirected to exam:', error.error);
            this.exam = error.error;

            // Use getExercisesByExamId method to fetch exercises
            this.tryGetExercisesByExamId(this.exam?.id);

          } else {
            console.error('Error fetching exam by ID:', error);
          }
        }
      );
    } else {
      console.log('Invalid exam ID format');
    }
  }
  public logout(){
    this.userDataService.logout();
  }

  submitExercises(event: Event) {
    event.preventDefault();

    let correctAnswersCount = 0;

    this.exercises.forEach((exercise, index) => {
      if (this.selectedAnswers[index] === exercise.answer) {
        console.log(`Exercise ${index + 1}: Correct`);
        correctAnswersCount++;
      } else {
        console.log(`Exercise ${index + 1}: Incorrect`);
      }
    });

    // Calculate the grade
    const grade = (correctAnswersCount / this.exercises.length) * 10;
    console.log(`Grade: ${grade.toFixed(2)}`);

    const newGrade: Grade = {
      id: 0,
      value: 0,
      exam_id: 0,
      student_id: 0,
      average: 0,
      student: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      exam: {
        id: 0,
        course: '',
        examDate: '',
        teacher: {
          id: 0,
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        },
        grade: ''
      }
    
    };

    // Call the GradeService to create the grade
    this.gradeService.createGrade(newGrade).subscribe(
      createdGrade => {
        console.log('Grade created successfully:', createdGrade);
        // Additional logic if needed
      },
      error => {
        console.error('Error creating grade:', error);
        // Handle error if needed
      }
    );
  }
  
  private tryGetExercisesByExamId(examId: number | undefined): void {
    if (examId !== undefined) {
      console.log('Fetching exercises...');
      this.getExercisesByExamId(examId);
    }
  }

  private getExercisesByExamId(examId: number): void {
    this.exercisesService.getExercisesByExamId(examId).subscribe(
      (exercises: Exercise[]) => {
        console.log('Exercises fetched:', exercises);
        this.exercises = exercises;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching exercises:', error);
      }
    );
  }
}
