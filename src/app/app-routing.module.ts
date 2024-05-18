import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons/lessons.component';
import { LessonViewComponent } from './lessons/lesson-view/lesson-view.component';
import { LayoutService } from './layout/layout.service';
import { Router, NavigationEnd } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'lessons', component: LessonsComponent },
  { path: 'lessons/:name', component: LessonViewComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private service: LayoutService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.service.updatePath();
      }
    });

  }
}
