import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../shared/interface/Students';
import { StudentsService } from '../../../../core/services/students.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from '../../../../core/store/auth-store/auth.selectors';
import { map } from 'rxjs/operators';
<<<<<<< HEAD
import { Router, ActivatedRoute } from '@angular/router';
import { TitleService } from '../../../../core/services/title.service';
=======
import { Router } from '@angular/router';
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655

@Component({
  selector: 'app-students-list',
  standalone: false,
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})

export class StudentsListComponent implements OnInit {

  dataSource!: Observable<Student[]>;
  isAdmin$: Observable<boolean>;
  displayedColumns: string[] = ['fullName', 'lastName', 'email', 'course'];

  constructor(
    private studentsService: StudentsService, 
    private store: Store,
<<<<<<< HEAD
    private router: Router,
    private titleService: TitleService,
    private route: ActivatedRoute
=======
    private router: Router
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
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
    this.dataSource = this.studentsService.studentsObs;
<<<<<<< HEAD
    const title = this.route.snapshot.data['title'] || 'Estudiantes';
    this.titleService.setTitle(title);
=======
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  }

  addStudents(newStudents: Student[]): void {
    this.studentsService.addStudentsObs(newStudents);
  }

  onView(id: number): void {
    this.router.navigate(['/students', id, 'view']);
  }

  onEdit(id: number): void {
    this.router.navigate(['/students', id, 'edit']);
  }

  onDelete(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      this.studentsService.deleteStudent(id);
    }
  }
}
