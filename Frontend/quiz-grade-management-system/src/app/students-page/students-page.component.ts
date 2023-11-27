import { Component, OnInit } from '@angular/core';
import { Student } from '../Classes/Student';
import { StudentService } from '../Services/student.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit{
  allStudents: Student[] = [];
  students: Student[] = [];
  searchText: string = '';

  constructor(private studentService: StudentService, 
    public dialog: MatDialog) {}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.allStudents = response;
        this.students = [...this.allStudents];
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  editStudent(student: Student): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '600px',
      data: { ...student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.patchStudent(result.id, result).subscribe(
          updatedStudent => {
            const index = this.students.findIndex(s => s.email === student.email);
            this.students[index] = updatedStudent;
            console.log('Student edited successfully:', updatedStudent);
          },
          (error: HttpErrorResponse) => {
            console.error('Error updating student:', error.message);
          }
        );
      }
    });
  }


  deleteStudent(student: Student) {
    const studentEmail = student.email;
    this.studentService.deleteStudentByEmail(studentEmail).subscribe(
      () => {
        this.students = this.students.filter(s => s.email !== studentEmail);
        console.log('Student deleted successfully.');
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting student:', error.message);
      }
    );
  }

  filterStudents() {
    this.students = this.allStudents.filter(student =>
      (student.firstName.toLowerCase() + ' ' + student.lastName.toLowerCase()).includes(this.searchText.toLowerCase())
    );
  }

  addStudent(): void {
    const dialogRef = this.dialog.open(StudentDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.createStudent(result).subscribe(
          newStudent => {
            this.allStudents.push(newStudent);
            this.students = [...this.allStudents];
            console.log('Student added successfully:', newStudent);
          },
          (error: HttpErrorResponse) => {
            console.error('Error adding student:', error.message);
          }
        );
      }
    });
  }
}
