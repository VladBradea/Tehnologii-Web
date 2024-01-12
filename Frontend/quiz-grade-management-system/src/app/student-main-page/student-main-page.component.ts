import { Component } from '@angular/core';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.css']
})
export class StudentMainPageComponent {

  constructor(private userDataService: UserDataService){}


  public logout(){
      this.userDataService.logout();
    }

}
