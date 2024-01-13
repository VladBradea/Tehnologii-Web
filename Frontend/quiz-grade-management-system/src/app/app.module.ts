import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { TestComponentComponent } from './first-page/test-component.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { TeacherSidemenuComponent } from './teacher-sidemenu/teacher-sidemenu.component';
import { ExercisesPageComponent } from './exercises-page/exercises-page.component';
import { ExamsPageComponent } from './exams-page/exams-page.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { ExerciseDialogComponent } from './exercise-dialog/exercise-dialog.component';
import { StatisticsPageComponent } from './statistics-page/statistics-page.component';
import { NgChartsModule } from 'ng2-charts';
import { ExamChooserDialgComponent } from './exam-chooser-dialg/exam-chooser-dialg.component';
import { CreateASubjectComponent } from './create-a-subject/create-a-subject.component';
import { GradesPageComponent } from './grades-page/grades-page.component';
import { GradeDialogComponent } from './grade-dialog/grade-dialog.component';
import { TeacherPersonalPageComponent } from './teacher-personal-page/teacher-personal-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { TeacherDialogComponent } from './teacher-dialog/teacher-dialog.component';
import { StudentMainPageComponent } from './student-main-page/student-main-page.component';
import { StudentPersonalDataComponent } from './student-personal-data/student-personal-data.component';
import { ViewGradesComponent } from './view-grades/view-grades.component';
import { TakeExamComponent } from './take-exam/take-exam.component';
import { StudentFeedbackComponent } from './student-feedback/student-feedback.component';
import { SendFeedbackDialogComponent } from './send-feedback-dialog/send-feedback-dialog.component';
import { SendCodePageComponent } from './send-code-page/send-code-page.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UserDataService } from './Services/user-data.service';
import { StatsDialogComponent } from './stats-dialog/stats-dialog.component';
import { ViewGradeDialogComponent } from './view-grade-dialog/view-grade-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    TestComponentComponent,
    TeacherPageComponent,
    TeacherSidemenuComponent,
    ExercisesPageComponent,
    ExamsPageComponent,
    StudentsPageComponent,
    StudentDialogComponent,
    ExerciseDialogComponent,
    StatisticsPageComponent,
    ExamChooserDialgComponent,
    CreateASubjectComponent,
    GradesPageComponent,
    GradeDialogComponent,
    TeacherPersonalPageComponent,
    FeedbackPageComponent,
    TeacherDialogComponent,
    StudentMainPageComponent,
    StudentPersonalDataComponent,
    ViewGradesComponent,
    TakeExamComponent,
    StudentFeedbackComponent,
    SendFeedbackDialogComponent,
    SendCodePageComponent,
    StatsDialogComponent,
    ViewGradeDialogComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    NgChartsModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
