import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="products-container">
      <h1>Products Page</h1>
      <p>This is a protected route that requires authentication.</p>
    </div>
  `,
  styles: [`
    .products-container {
      padding: 20px;
      text-align: center;
    }
  `]
})
export class ProductsComponent {} 