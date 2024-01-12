import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../Services/exam.service';
import { Exam } from '../Classes/Exam';

@Component({
  selector: 'app-send-code-page',
  templateUrl: './send-code-page.component.html',
  styleUrls: ['./send-code-page.component.css']
})
export class SendCodePageComponent {
  enteredExamId: string = '';
  exam: Exam | null = null;

  constructor(private examService: ExamService, private router: Router) { }

  checkAndOpenExam() {
    const enteredIdAsNumber = Number(this.enteredExamId);
    if (!isNaN(enteredIdAsNumber)) {
      this.examService.getExamById(enteredIdAsNumber).subscribe(
        exam => {
          if (exam) {
            this.exam = exam;
          } else {
            console.log('Exam not found');
          }
        },
        error => {
          if (error.status === 302 && error.error) {
            this.exam = error.error;
          }
  
        }
      );
    } else {
      console.log('Invalid exam ID format');
    }
  }
}

