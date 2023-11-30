import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Classes/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit{
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService){}


  ngOnInit(): void {
    this.getFeedbacks();
  }

  public getFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(
      (response: Feedback[]) => {
        this.feedbacks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
