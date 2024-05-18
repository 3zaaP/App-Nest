import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { LayoutService } from '../layout.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})

export class NavBarComponent implements OnInit {
  breadcrumbItems: string[] = [];


  isThemeDark: boolean = true;
  constructor(private themeService: ThemeService, private service: LayoutService) { }
  toggleDarkTheme(checked: any) {
    this.themeService.setDarkTheme(checked.checked);
  }
  ngOnInit() {
    this.service.getCurrentPath().subscribe(path => {
      this.breadcrumbItems = [];
      path.forEach((c) => {
        c = decodeURIComponent(c);
        this.breadcrumbItems.push(c);
      })
    });

    const toggleButton = document.querySelector('.dark-light-toggle');
    const body = document.body;
    toggleButton!.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
    });
  }
}
