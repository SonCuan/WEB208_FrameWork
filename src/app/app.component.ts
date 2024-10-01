import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { IProduct } from './interface/product';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductAddComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products : IProduct[] = [
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
  title = 'My_Angular';
  student: {
    fullName : string,
    gender : "Nam" | "Nu" , 
    age : number,
    picture : string, 
    agvScore : number,
  } = {
    fullName : "Nguyen Van A", 
    gender : "Nam",
    age : 20,
    picture : "https://picsum.photos/200",
    agvScore : 10
  }
 

  getProfile (){ 
    return `trash`
  }


  // renderInventor() : void {
  //   const innerHTML = this.inventors.map(inventor => {
  //     return `<tr>
  //       <td>${inventor.id}</td>
  //       <td>${inventor.first}</td>
  //       <td>${inventor.last}</td>
  //       <td>${inventor.year}</td>
  //       <td>${inventor.passed}</td>
  //     </tr>`;
  //   }).join('');
  //   const tableTbody = document.querySelector("#inventor");
  //   if(tableTbody) {
  //     tableTbody.innerHTML = innerHTML;
  //   }
  // }

  // renderProduct():void {
  //   const innerHTML = this.products.map (product => { 
  //     return `<tr>
  //       <td><img src="${product.imageUrl}" alt="${product.productName}" /></td>
  //       <td>${product.productName}</td>
  //       <td>${product.productCode}</td>
  //       <td>${product.releaseDate}</td>
  //       <td>${product.price}</td>
  //       <td>${product.starRating}</td>
  //       </tr>`
  //   }).join("");
  //   const tableProduct = document.querySelector("#product");
  //   if(tableProduct) {
  //     tableProduct.innerHTML = innerHTML;
  //   }
  // }
  onHandleAdd(products : any) { 
    this.products = [...this.products , products];
  }
 }

