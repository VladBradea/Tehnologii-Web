import { Component } from '@angular/core';
import { ExamService } from '../Services/exam.service';
import { Exam } from '../Classes/Exam';
import { Teacher } from '../Classes/Teacher';

@Component({
  selector: 'app-create-a-subject',
  templateUrl: './create-a-subject.component.html',
  styleUrls: ['./create-a-subject.component.css']
})
export class CreateASubjectComponent {

  teacher1: Teacher[] = [];

 constructor(private examService: ExamService) {}

 newExam: Exam = {
   id: 0,
   course: '',
   teacher: { 
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
   },
   examDate: '',
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

}
