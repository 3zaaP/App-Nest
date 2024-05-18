import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, } from '@angular/forms';
import { ThemeService } from '../../layout/theme.service';
import { LessonsService } from '../services/lessons.service';
import { Editor, Toolbar } from 'ngx-editor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  pageTitle = 'المواد الدراسية';
  editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  html = '';
  lessons: any;
  unitId: any;
  checkedArray: any[] = [];
  allLessons: any;
  constructor(private fb: FormBuilder, private themeService: ThemeService, private service: LessonsService, private router: Router) { }
  form: FormGroup = new FormGroup({});
  units: any;
  subjects: any;
  videoPool = true;
  state = 'init'
  ngOnInit(): void {
    this.allLessons = this.service.getAllLessons();
    this.editor = new Editor();
    this.getUnits();
    this.form = this.fb.group({
      unit_id: new FormControl(''),
      unit_name: new FormControl(''),
      lessons_count: new FormControl(''),
      lesson_id: new FormControl(''),
      lesson_name: new FormControl(''),
      lesson_tags: new FormControl(this.checkedArray),
      lesson_time: new FormControl(''),
      lesson_description: new FormControl(''),
      lesson_content: new FormControl(''),
      subject_id: new FormControl(''),
      subject_name: new FormControl('')
    });
  }
  getUnits() {
    this.units = this.service.getUnits();

  }
  handleFormSubmit(formData: any) {
    this.service.createOrUpdateContent(formData).subscribe((c: any) => {
      console.log(c);
    });
  }
  getLessons(id: any) {
    this.lessons = this.service.getLessons(id);
    this.unitId === id ? (this.lessons.length = 0, this.unitId = -1) : (this.unitId = id, this.lessons = this.lessons.filter((c: any) => c.unit_id == id));

  }
  editLesson(id: any) {
    this.state = 'edit'
  }
  viewLesson(id: any) {
    this.router.navigate(["/lessons/" + id]);
  }
  addcontent() {
    this.state === 'add' ? this.state = 'init' : this.state = 'add';
    this.subjects = this.service.getSubjects()
  }

  onFileChange(event: any) {

  }
  checkL() {
    var checkList = document.getElementById('list1')!;
    if (checkList.classList.contains('visible'))
      checkList.classList.remove('visible');
    else
      checkList.classList.add('visible');

  }
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      this.checkedArray.push(event.target.value)
    } else {
      this.checkedArray.splice(this.checkedArray.indexOf(event.target.value), 1);
    }
  }
  toggleVideo(id: any) {
    var text = document.getElementById('text')!;
    var video = document.getElementById('video')!;
    if (id === 'text') {
      text.style.color = '#004BFD';
      video.style.color = 'gray';
      this.videoPool = true;
    }
    else if (id === 'video') {
      video.style.color = '#004BFD';
      text.style.color = 'gray';
      this.videoPool = false;
    }
  }
}
