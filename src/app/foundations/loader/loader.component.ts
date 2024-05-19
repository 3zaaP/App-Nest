import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {

  progressValue: number = 0;
  constructor() { }

  ngOnInit(): void {
    //  progress bar movement 


    // const interval = setInterval(() => {
    //   this.progressValue = this.progressValue + 5;
    //   if (this.progressValue >= 100) {
    //     this.progressValue = 0;
    //   }
    // }, 100);
  }

  show() {
    const loader = document.getElementById('loader') ? document.getElementById('loader') as HTMLElement : null;
    if (loader) {
      loader
    }
    console.log(loader, 'MODAAAAAAAAAL');
  }
}
function inject(NgbModal: any) {
  throw new Error('Function not implemented.');
}

