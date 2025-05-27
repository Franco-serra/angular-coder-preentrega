import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../shared/interface/Students';
import { StudentsService } from '../../../../core/services/students.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-students-list',
  standalone: false,
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})

export class StudentsListComponent implements OnInit {

  
  dataSource!: Observable<Student[]>;
  displayedColumns: string[] = ['fullName', 'lastName', 'email', 'course'];

  

  constructor(private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.dataSource = this.studentsService.studentsObs;
  }

  addStudents(newStudents: Student[]): void {
    this.studentsService.addStudentsObs(newStudents);
  }
}
