import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h1>Welcome to Home Page</h1>
      <p>This is a protected route that requires authentication.</p>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class HomeComponent {} 