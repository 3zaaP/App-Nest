import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private currentPathSubject = new Subject<string[]>();

  constructor(private route: ActivatedRoute) { }

  getPath(): string[] {
    let path = window.location.pathname;
    path.match('/') ? path = path.slice(0) : '';
    return path.split('/');
  }

  updatePath() {
    this.currentPathSubject.next(this.getPath());

  }
  getCurrentPath(): Observable<string[]> {
    return this.currentPathSubject.asObservable();
  }
}

