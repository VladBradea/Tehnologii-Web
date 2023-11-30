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
  { path: 'feedback-page', component: FeedbackPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
