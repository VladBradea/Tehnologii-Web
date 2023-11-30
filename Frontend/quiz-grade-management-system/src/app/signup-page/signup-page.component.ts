import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../Services/teacher.service';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {
  id = 0;
  ids = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  accountType: string = 'teacher';

  constructor(
    private router: Router,
    private teacherService: TeacherService,
    private studentService: StudentService
  ) {}

  onSubmit(): void {
    if (this.accountType === 'teacher') {
      const teacher = { id: 0, firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password };
      this.teacherService.createTeacher(teacher).subscribe(
        createdTeacher => {
          console.log('Teacher account created:', createdTeacher);
          this.router.navigate(['/teacher-page']);
        },
        error => {
          console.error('Error creating teacher account:', error);
        }
      );
    } else if (this.accountType === 'student') {
      const student = { id: this.ids, firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password };
      this.studentService.createStudent(student).subscribe(
        createdStudent => {
          console.log('Student account created:', createdStudent);
          this.router.navigate(['/teacher-page']);
        },
        error => {
          console.error('Error creating student account:', error);
        }
      );
    }
  }
}
