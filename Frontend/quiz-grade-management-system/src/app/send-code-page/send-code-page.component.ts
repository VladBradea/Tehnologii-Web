import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-code-page',
  templateUrl: './send-code-page.component.html',
  styleUrls: ['./send-code-page.component.css']
})
export class SendCodePageComponent {
  examId!: string;  // Keep as string to capture form input

  constructor(private router: Router) { }

  onSubmit() {
    const examIdNumber = Number(this.examId);  // Convert string to number
    if (!isNaN(examIdNumber)) {
      this.router.navigate(['/take-exam', { id: examIdNumber }]);
    } else {
      // Handle the error if the input is not a valid number
      alert('Please enter a valid exam ID number');
    }
  }
}

