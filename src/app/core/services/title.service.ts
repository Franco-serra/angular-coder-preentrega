import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
<<<<<<< HEAD
  private titleSubject = new BehaviorSubject<string>('Inicio');
=======
  private titleSubject = new BehaviorSubject<string>('');
>>>>>>> 08d621df9b9912ee41fefb91e8bd5db62ab42655
  title$ = this.titleSubject.asObservable();

  setTitle(title: string) {
    setTimeout(() => {
      this.titleSubject.next(title);
    });
  }
} 