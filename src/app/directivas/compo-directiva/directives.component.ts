import { Component } from '@angular/core';
import { Students } from '../interfaz/students';

@Component({
  selector: 'app-directives',
  standalone: false,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  public students: Students[] = [ // 
    { name: 'franco', lastName: 'serra', age: 26, average: 8 },
    { name: 'juana', lastName: 'perez', age: 28, average: 3 },
    { name: 'luciana', lastName: 'garcia', age: 25, average: 5 },
    { name: 'bruno', lastName: 'ellena', age: 25, average: 9 },
    { name: 'luciano', lastName: 'montero', age: 25, average: 8 },
    { name: 'sasha', lastName: 'palacios', age: 25, average: 10 },
    { name: 'elias', lastName: 'otero', age: 25, average: 10 },
    { name: 'maria', lastName: 'gonzalez', age: 25, average: 1 },
  ];

  isApproved(average: number): boolean {
    return average >= 6;
  }
}

