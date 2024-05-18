import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../services/lessons.service';

interface Lessons {
  lesson_name: string;
  lesson_id: number;
  subject_name: string;
  subject_id: number;
  lesson_tags: [];
  lesson_time: Date;
  unit_name: number;
  lesson_content: [];
  description: string;
  // Add other lesson properties as needed
}

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson-view.component.html',
  styleUrls: ['./lesson-view.component.css']
})
export class LessonViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private service: LessonsService) { }
  lesson: any;
  descriptions: any;
  @Input() lessons!: Lessons;
  lessonId: any;
  ngOnInit(): void {
    this.lessonId = this.route.snapshot.paramMap.get('name');
    this.lesson = this.service.getLesson(this.lessonId);
  }
}
