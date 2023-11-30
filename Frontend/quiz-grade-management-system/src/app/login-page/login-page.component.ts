import { Component } from '@angular/core';
import { TeacherService } from '../Services/teacher.service';
import { StudentService } from '../Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';
  accountNotFound: boolean = false;

  constructor(private teacherService: TeacherService, private studentService: StudentService, private router: Router) {}

  onSubmit(): void {
    // Try teacher login
    this.teacherService.getTeachers().subscribe(
      teachers => {
        const matchedTeacher = teachers.find(teacher => teacher.email === this.username && teacher.password === this.password);
        if (matchedTeacher) {
          console.log('Teacher logged in:', matchedTeacher);
          this.router.navigate(['/teacher-page']);
        } else {
          // If teacher login fails, try student login
          this.studentService.getStudents().subscribe(
            students => {
              const matchedStudent = students.find(student => student.email === this.username && student.password === this.password);
              if (matchedStudent) {
                console.log('Student logged in:', matchedStudent);
                this.router.navigate(['/teacher-page']);
              } else {
                console.error('Invalid username or password');
                this.accountNotFound = true;
              }
            },
            error => {
              console.error('Error fetching students:', error);
            }
          );
        }
      },
      error => {
        console.error('Error fetching teachers:', error);
      }
    );
  }
}
