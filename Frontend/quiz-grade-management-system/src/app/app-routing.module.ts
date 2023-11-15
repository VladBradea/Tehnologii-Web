import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestComponentComponent } from './first-page/test-component.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent},
  { path: 'signup-page', component: SignupPageComponent},
  { path: 'quizGrade', component: TestComponentComponent},
  {path: '', redirectTo: '/quizGrade', pathMatch: 'full'},
  { path: 'teacher-page', component: TeacherPageComponent},
  { path: 'exercises-page', component: ExercisesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
