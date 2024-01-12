import { Component, Inject } from '@angular/core';
import { GradeService } from '../Services/grade.service';
import { Grade } from '../Classes/Grade';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exam } from '../Classes/Exam';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
  styleUrls: ['./stats-dialog.component.css']
})
export class StatsDialogComponent {

  

  constructor(
    private gradeService: GradeService,
    public dialogRef: MatDialogRef<StatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { exam: Exam, grades: Grade[] }
  ) {}

  chartOptions: any;
  gradesList: number[] = [];
  
  ngOnInit() {
    this.getGradesByExamId(this.data.exam.id);
    this.initializeDefaultChartOptions();
  }
  initializeChartOptions() {
    this.chartOptions = {
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "Student Grades Distribution"
      },
      data: [{
        type: "pie",
        startAngle: 45,
        indexLabel: "{name}: {y}%",
       
        yValueFormatString: "#,###'%'",
        dataPoints: this.getGradePercentages()
      }]
    };
  }
  private initializeDefaultChartOptions() {
    this.chartOptions = {
    };
  }
  public getGradesByExamId(examId: number): void {
    this.gradeService.getGradeByExamId(examId).subscribe(
      (grades: Grade[]) => {
        console.log('Grades for Exam ID:', examId, grades);
        this.gradesList = grades.map(grade => grade.value);
        console.log(this.gradesList ,'aray note');
        this.initializeChartOptions(); // Initialize chart options after data is fetched
      },
      (error) => {
        console.error('Error fetching grades:', error);
      }
    );
    }
    
  
  public getGradePercentages() {
    const total = this.gradesList.length; // Use gradesList here
    const gradeCounts = this.gradesList.reduce<{ [key: number]: number }>((acc, grade) => {
      acc[grade] = (acc[grade] || 0) + 1;
      return acc;
    }, {});
    console.log(this.gradesList ,'aray note1');
    return Object.keys(gradeCounts).map(key => {
      const grade = parseInt(key);
      return {
        y: (gradeCounts[grade] / total) * 100,
        name: `Grade ${grade}`
      };
    });
  }
}
