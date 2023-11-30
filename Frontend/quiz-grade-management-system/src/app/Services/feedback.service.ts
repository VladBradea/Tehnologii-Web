import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../Classes/Feedback';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private feedbackUrl = 'http://localhost:8080/api/feedbacks/';

  constructor(private http: HttpClient) { }

  public getFeedbacks(): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.feedbackUrl}`);
  }

  public createFeedback(feedback: Feedback): Observable<Feedback>{
    return this.http.post<Feedback>(`${this.feedbackUrl}`,feedback);
  }

  public getFeedbackById(feedbackId: number): Observable<Feedback>{
    return this.http.get<Feedback>(`${this.feedbackUrl}id/${feedbackId}`);
  }

  public getFeedbacksByExamId(examId: number): Observable<Feedback[]>{
    return this.http.get<Feedback[]>(`${this.feedbackUrl}examId/${examId}`);
  }

  public deleteFeedbackById(feedbackId: number): Observable<void>{
    return this.http.delete<void>(`${this.feedbackUrl}id/${feedbackId}`);
  }

  public deleteFeedbackByExamId(examId: number): Observable<void>{
    return this.http.delete<void>(`${this.feedbackUrl}examId/${examId}`);
  }

  public updateFeedback(feedback: Feedback): Observable<Feedback> {
    return this.http.put<Feedback>(`${this.feedbackUrl}id/${feedback.id}`, feedback);
  }

  public patchFeedback(id: number,feedback: Feedback): Observable<Feedback> {
    return this.http.patch<Feedback>(`${this.feedbackUrl}id/${feedback.id}`, feedback);
  }

  public deleteAllFeedbacks(): Observable<void>{
    return this.http.delete<void>(`${this.feedbackUrl}`);
  }
}
