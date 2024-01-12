import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.component.html',
  styleUrls: ['./teacher-page.component.css']
})
export class TeacherPageComponent implements OnInit{

  constructor(private userDataService: UserDataService){
    
  }
  ngOnInit(){
    console.log(this.userDataService.getUserData(), "main page ngOnInit");
  }


  handleButtonClick(): void {
    console.log('Button clicked!');
  }

  handleCardClick(cardName: string): void {
    console.log(`Card clicked: ${cardName}`);
  }

  public logout(){
    this.userDataService.logout();
  }
}
