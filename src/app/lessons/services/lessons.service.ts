import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LoaderComponent } from '../../foundations/loader/loader.component';
@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  unitId: any;
  unitlessons: any;
  newUnit: any;
  private units = [
    {
      unit_id: 0,
      unit_name: 'الوحدة الأولي',
      lessons_count: 3
    },
    {
      unit_id: 1,
      unit_name: 'الوحدة الثانية',
      lessons_count: 5
    },
    {
      unit_id: 2,
      unit_name: 'الوحدة الثالثة',
      lessons_count: 2
    },
    {
      unit_id: 3,
      unit_name: 'الوحدة الرابعة',
      lessons_count: 1
    }
  ];
  private lessons = [
    {
      lesson_id: 0,
      lesson_name: 'الدرس الأول',
      unit_id: 0,
      unit_name: 'الوحدة الأولي',
      time: '2 H',
      subject_name: 'المادة الأولى',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },

    },
    {
      lesson_id: 1,
      lesson_name: 'الدرس الثاني',
      unit_id: 0,
      unit_name: 'الوحدة الأولي',
      time: '2 H',
      subject_name: 'المادة الأولى',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },

    },
    {
      lesson_id: 2,
      lesson_name: 'الدرس الثالث',
      unit_id: 1,
      unit_name: 'الوحدة الثانية',
      time: '2 H',
      subject_name: 'المادة الأولى',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },
    },
    {
      lesson_id: 3,
      lesson_name: 'الدرس الرابع',
      unit_id: 1,
      unit_name: 'الوحدة الثانية',
      time: '2 H',
      subject_name: 'المادة الثانية',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },

    },
    {
      lesson_id: 4,
      lesson_name: 'الدرس الخامس',
      unit_id: 2,
      unit_name: 'الوحدة الثالثة',
      time: '2 H',
      subject_name: 'المادة الثالثة',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },

    },
    {
      lesson_id: 5,
      lesson_name: 'الدرس السادس',
      unit_id: 2,
      unit_name: 'الوحدة الثالثة',
      time: '2 H',
      subject_name: 'المادة الرابعة',
      tags: { 'tag5': true, 'tag1': true, 'tag6': true },
    }
  ];
  private subjects = [
    {
      subject_id: 0,
      subject_name: 'المادة الأولى',

    },
    {
      subject_id: 1,
      subject_name: 'المادة الثانية',
    },
    {
      subject_id: 2,
      subject_name: 'المادة الثالثة',
    },
    {
      subject_id: 3,
      subject_name: 'المادة الرابعة',
    }
  ]
  constructor(private dialog: MatDialog) { }

  getUnits(): any[] {
    return this.units
  }
  getSubjects(): any[] {
    return this.subjects
  }

  getLessons(id: any): any[] {
    return this.lessons.filter((c: any) => c.unit_id == id)
  }
  getAllLessons() {
    return this.lessons
  }
  getLesson(id: any): {} {
    var lesson = this.lessons.filter((c: any) => c.lesson_name == id)
    if (lesson[0]) {
      console.log(lesson);
      return (lesson[0]);

    } else {
      return {}
    }
  }
  getUnitLessons(id: any): any[] {
    this.unitId === id ? (this.unitlessons.length = 0, this.unitId = -1) : (this.unitId = id, this.unitlessons = this.lessons.filter((c: any) => c.unit_id == id));
    return this.unitlessons;
  }
  createOrUpdateContent(data: any): Observable<any> {
    const dialogRef = this.dialog.open(LoaderComponent, {
      panelClass: 'transparent',
      disableClose: true,
      data: {
        message: 'Please wait...'
      }
    });

    return new Observable(observer => {

      const timeoutId = setTimeout(() => {
        dialogRef.close();
        observer.next({ message: 'Success' });
        observer.complete();
      }, 3000);

      return () => clearTimeout(timeoutId);
    });
  }
}
