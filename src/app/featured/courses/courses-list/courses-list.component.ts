import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../../../shared/interface/Courses';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsAdmin } from '../../../core/store/auth-store/auth.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  standalone: false
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  isAdmin$: Observable<boolean>;
  displayedColumns: string[] = ['name', 'description', 'duration'];

  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private store: Store
  ) {
    this.isAdmin$ = this.store.select(selectIsAdmin);
    
    // Add actions column for admins
    this.isAdmin$.pipe(
      map(isAdmin => isAdmin ? [...this.displayedColumns, 'actions'] : this.displayedColumns)
    ).subscribe(columns => {
      this.displayedColumns = columns;
    });
  }

  ngOnInit(): void {
    this.coursesService.coursesObs.subscribe(courses => {
      this.courses = courses;
    });
  }

  onEdit(course: Course): void {
    this.router.navigate(['courses', course.id, 'edit']);
  }

  onDelete(course: Course): void {
    if (course.id) {
      this.coursesService.deleteCourse(course.id);
    }
  }

  onNewCourse(): void {
    this.router.navigate(['courses', 'new']);
  }
} 