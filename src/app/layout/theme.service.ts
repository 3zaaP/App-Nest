// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);

  get isThemeDark() {
    return this.isDarkTheme.asObservable();
  }

  setDarkTheme(isDark: boolean) {
    this.isDarkTheme.next(isDark);
  }
}
