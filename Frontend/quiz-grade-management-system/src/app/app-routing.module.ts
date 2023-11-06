import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestComponentComponent } from './first-page/test-component.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent},
  { path: 'signup-page', component: SignupPageComponent},
  { path: 'quizGrade', component: TestComponentComponent},
  {path: '', redirectTo: '/quizGrade', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
