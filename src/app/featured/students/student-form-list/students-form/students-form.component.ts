import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../../../../shared/interface/Students';
import { StudentsService } from '../../../../core/services/students.service';

@Component({
  selector: 'app-students-form',
  standalone: false,
  templateUrl: './students-form.component.html',
  styleUrl: './students-form.component.css'
})
export class StudentsFormComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private studentsService: StudentsService) {
    this.formGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      const student: Student = this.formGroup.value;
      this.studentsService.addStudentsObs([student]);  
      this.formGroup.reset();
    }
  }
  
}

