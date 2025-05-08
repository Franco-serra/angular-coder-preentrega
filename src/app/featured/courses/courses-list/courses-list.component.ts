import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../../../shared/interface/Courses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
  standalone: false
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) {}

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