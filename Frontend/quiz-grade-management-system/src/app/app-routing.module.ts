import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestComponentComponent } from './first-page/test-component.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';
import { ExamsPageComponent } from './exams-page/exams-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { CreateASubjectComponent } from './create-a-subject/create-a-subject.component';
import { GradeService } from './Services/grade.service';
import { GradesPageComponent } from './grades-page/grades-page.component';
import { TeacherPersonalPageComponent } from './teacher-personal-page/teacher-personal-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { StudentMainPageComponent } from 'src/app/student-main-page/student-main-page.component';
import { StudentPersonalDataComponent } from 'src/app/student-personal-data/student-personal-data.component';
import { ViewGradesComponent } from 'src/app/view-grades/view-grades.component';
import { TakeExamComponent } from 'src/app/take-exam/take-exam.component';
import { StudentFeedbackComponent } from 'src/app/student-feedback/student-feedback.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent},
  { path: 'signup-page', component: SignupPageComponent},
  { path: 'quizGrade', component: TestComponentComponent},
  {path: '', redirectTo: '/quizGrade', pathMatch: 'full'},
  { path: 'teacher-page', component: TeacherPageComponent},
  { path: 'exercise-page', component: ExercisesPageComponent},
  { path: 'exam-page', component: ExamsPageComponent},
  { path: 'students-page', component: StudentsPageComponent},
  { path: 'statistics-page', component: StatisticsPageComponent},
  { path: 'create-a-subject', component: CreateASubjectComponent},
  { path: 'grades-page', component: GradesPageComponent},
  { path: 'teacher-personal-page', component: TeacherPersonalPageComponent},
  { path: 'feedback-page', component: FeedbackPageComponent },
  { path: 'student-main-page', component: StudentMainPageComponent },
  { path: 'student-personal-data', component: StudentPersonalDataComponent },
  { path: 'view-gardes', component: ViewGradesComponent },
  { path: 'take-exam', component: TakeExamComponent },
  { path: 'student-feedback', component: StudentFeedbackComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
