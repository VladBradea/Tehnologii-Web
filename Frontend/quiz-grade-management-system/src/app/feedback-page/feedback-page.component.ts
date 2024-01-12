import { Component, OnInit } from '@angular/core';
import { Feedback } from '../Classes/Feedback';
import { FeedbackService } from '../Services/feedback.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit{
  feedbacks: Feedback[] = [];

  constructor(private feedbackService: FeedbackService, private userDataService: UserDataService){}


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

  public logout(){
    this.userDataService.logout();
  }
}
