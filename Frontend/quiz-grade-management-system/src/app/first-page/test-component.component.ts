import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit{

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
