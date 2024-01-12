import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
  styleUrls: ['./stats-dialog.component.css']
})
export class StatsDialogComponent {
  gradesList = [10, 10, 9, 2, 3, 4, 5, 3, 3, 5, 6, 7, 4, 5];
  chartOptions: any;

  ngOnInit() {
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

  getGradePercentages() {
    const gradeCounts = this.gradesList.reduce<{ [key: number]: number }>((acc, grade) => {
      acc[grade] = (acc[grade] || 0) + 1;
      return acc;
    }, {});

    const total = this.gradesList.length;
    return Object.keys(gradeCounts).map(key => {
      const grade = parseInt(key);
      return {
        y: (gradeCounts[grade] / total) * 100,
        name: `Grade ${grade}`
      };
    });
  }
}
