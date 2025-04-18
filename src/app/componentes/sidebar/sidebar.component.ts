import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

    students: Student[] = [];

    constructor (private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            firstName: [''],
            lastName: [''],
            email: [''],
            course: [''],
        });
    }
    submit() {
        console.log(this.formGroup.value);

        const student = {
          firstName: this.formGroup.value.firstName,
          lastName: this.formGroup.value.lastName,
          email: this.formGroup.value.email,
          course: this.formGroup.value.course,
        }
        this.students.push(student);

        this.formGroup.reset();
    }

}

