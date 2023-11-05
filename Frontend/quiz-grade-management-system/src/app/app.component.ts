import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{

  constructor(private router: Router) { }

  
  ngOnInit(): void {
  }

  title = 'Quiz grade management system';

  navigateToComponent(componentName: string) {
    this.router.navigate([componentName]);
  }

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
  
 
}
