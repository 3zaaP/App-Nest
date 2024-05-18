import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  progressValue: number = 0;

  constructor() { }

  ngOnInit() {
    //  progress bar movement 

    // const interval = setInterval(() => {
    //   this.progressValue = this.progressValue + 5;
    //   if (this.progressValue >= 100) {
    //     this.progressValue = 0;
    //   }
    // }, 100);
  }
}
