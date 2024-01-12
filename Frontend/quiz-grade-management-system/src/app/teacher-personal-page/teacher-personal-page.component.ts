import { Component, OnInit } from '@angular/core';
import { Teacher } from '../Classes/Teacher';
import { TeacherService } from '../Services/teacher.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { TeacherDialogComponent } from '../teacher-dialog/teacher-dialog.component';
import { UserDataService } from '../Services/user-data.service';

@Component({
  selector: 'app-teacher-personal-page',
  templateUrl: './teacher-personal-page.component.html',
  styleUrls: ['./teacher-personal-page.component.css']
})
export class TeacherPersonalPageComponent implements OnInit {
  teacher: Teacher | null = null;
  firstTeacher: Teacher | null = null;

  constructor(private teacherService: TeacherService, public dialog: MatDialog, private userDataService: UserDataService) {
    console.log(this.userDataService.getUserData(), "personal detail");
  }

  ngOnInit() {
    this.getTeacherById(this.userDataService.getUserData().id);
  }


  private getTeacherById(teacherId: number): void {
    this.teacherService.getTeacherById(teacherId).subscribe(
      (response: Teacher) => {
        this.firstTeacher = response;
        this.teacher = { ...this.firstTeacher };
      },
      (error: HttpErrorResponse) => {
        if (error.status === 302) {
          this.teacher = error.error;
        } else {
          alert(error.message);
        }
      }
    );
  }

  editPassword(teacher: Teacher): void {
    const dialogRef = this.dialog.open(TeacherDialogComponent, {
      width: '600px',
      data: { ...teacher }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teacherService.patchTeacher(result.id, result).subscribe(
          updatedTeacher => {
            this.teacher = { ...updatedTeacher };
            console.log('Teacher edited successfully:', updatedTeacher);
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating teacher:', error.message);
          }
        );
      }
    });
  }

public logout(){
  this.userDataService.logout();
}
}