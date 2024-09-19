import { Component, Input } from '@angular/core';
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
  @Input ()  products! : Product[];
  selectedProduct! : Product
 
  DeleteProduct (id : number ) { 
    if(confirm("Ban co muon xoa khong ? ")) { 
      this.products = this.products.filter(product => product.id !== id);
    }
  }
  getProduct (product : Product) {
    this.selectedProduct = product;
  }
}
