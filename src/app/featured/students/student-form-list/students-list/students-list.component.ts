import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../shared/interface/Students';
import { StudentsService } from '../../../../core/services/students.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAdmin } from '../../../../core/store/auth-store/auth.selectors';
import { map } from 'rxjs/operators';

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

  constructor(private studentsService: StudentsService, private store: Store) {
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
  }

  addStudents(newStudents: Student[]): void {
    this.studentsService.addStudentsObs(newStudents);
  }

  onView(id: number): void {
    // Implement view logic
    console.log('Ver estudiante:', id);
  }

  onEdit(id: number): void {
    // Implement edit logic
    console.log('Editar estudiante:', id);
  }

  onDelete(id: number): void {
    // Implement delete logic
    if (id) {
      this.studentsService.deleteStudent(id);
    }
  }
}
