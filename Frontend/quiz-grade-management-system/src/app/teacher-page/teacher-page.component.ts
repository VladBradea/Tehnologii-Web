import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent {
  handleButtonClick(): void {
    // Logic for handling button click goes here
    console.log('Button clicked!');
  }

  handleCardClick(cardName: string): void {
    // Logic for handling card click goes here
    console.log(`Card clicked: ${cardName}`);
  }
}
