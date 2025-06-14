import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../../../shared/interface/Courses';
<<<<<<< HEAD
import { TitleService } from '../../../core/services/title.service';
=======
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
  standalone: false
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId?: number;

  constructor(
    private fb: FormBuilder,
    private coursesService: CoursesService,
    public router: Router,
<<<<<<< HEAD
    private route: ActivatedRoute,
    private titleService: TitleService
=======
    private route: ActivatedRoute
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  ) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.courseId = +params['id'];
        const course = this.coursesService.getCourseById(this.courseId);
        if (course) {
          this.courseForm.patchValue(course);
        }
      }
    });
<<<<<<< HEAD
    const title = this.route.snapshot.data['title'] || (this.isEditMode ? 'Editar Curso' : 'Nuevo Curso');
    this.titleService.setTitle(title);
=======
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData: Course = {
        ...this.courseForm.value,
        id: this.courseId
      };

      if (this.isEditMode && this.courseId) {
        this.coursesService.updateCourse(courseData);
      } else {
        this.coursesService.addCourse(courseData);
      }

      this.router.navigate(['/courses']);
    }
  }
} 