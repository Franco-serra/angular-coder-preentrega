import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../shared/interface/Students';




@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent {
  showFiller = false;

  formGroup: FormGroup;

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'course'];
  dataSource: Student[] = [];

  students: Student[] = [];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
    });

    this.dataSource = [...this.students];
  }

  submit() {
    const student: Student = {
      firstName: this.formGroup.value.firstName,
      lastName: this.formGroup.value.lastName,
      email: this.formGroup.value.email,
      course: this.formGroup.value.course,
    };

    this.students.push(student);

    this.dataSource = [...this.students];

    this.formGroup.reset();
  }
}