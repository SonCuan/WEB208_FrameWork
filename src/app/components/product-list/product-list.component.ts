import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../../interface/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct! : Product
  products : Product[] = [
    { id: 1, name: 'Laptop', price: 999.99, code: 1001, available: true, starRating: 4.5 },
    { id: 2, name: 'Smartphone', price: 499.99, code: 1002, available: true, starRating: 4.0 },
    { id: 3, name: 'Headphones', price: 79.99, code: 1003, available: true, starRating: 4.2 },
    { id: 4, name: 'Smartwatch', price: 199.99, code: 1004, available: false, starRating: 3.8 },
    { id: 5, name: 'Tablet', price: 299.99, code: 1005, available: true, starRating: 4.4 },
    { id: 6, name: 'Keyboard', price: 49.99, code: 1006, available: true, starRating: 4.1 },
    { id: 7, name: 'Mouse', price: 29.99, code: 1007, available: true, starRating: 4.3 },
    { id: 8, name: 'Monitor', price: 159.99, code: 1008, available: true, starRating: 4.6 },
    { id: 9, name: 'Printer', price: 89.99, code: 1009, available: false, starRating: 3.9 },
    { id: 10, name: 'External Hard Drive', price: 129.99, code: 1010, available: true, starRating: 4.7 }
  ]
  DeleteProduct (id : number ) { 
    if(confirm("Ban co muon xoa khong ? ")) { 
      this.products = this.products.filter(product => product.id !== id);
    }
  }
  getProduct (product : Product) {
    this.selectedProduct = product;
  }
}
