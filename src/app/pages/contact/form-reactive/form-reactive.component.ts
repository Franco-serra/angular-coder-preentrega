import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  standalone: false,
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form =this.fb.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message:['', [Validators.required, Validators.minLength(6)]],
}
);}
onSubmit() {
  console.log(this.form.value);
}
}