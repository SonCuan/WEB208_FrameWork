import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Inventor } from './interface.inventor';
import { Product } from './interface.inventor';
import { CounterComponent } from './components/counter/counter.component';
import { ProductListComponent } from './components/product-list/product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProductListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
  inventors: Inventor[] = [ 
    { id: 1, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 2, first: 'Son Quan', last: 'Quan', year: 2004, passed: 2024 },
    { id: 3, first: 'Tran Hoan', last: 'Hoan', year: 2004, passed: 2024 },
    { id: 4, first: 'Van Hop', last: 'Hop', year: 2004, passed: 2024 },
  ];
 
  products: Product[] = [
    {
      productId: 1,
      productName: 'Leaf Cake', 
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      price: 19.95,
      description: 'Leaf rake with 48-inch wooden handle.',
      starRating: 3.2,
      imageUrl: 'https://picsum.photos/100'
    },
    {
      productId: 2,
      productName: 'Tu lanh',
      productCode : 'GDN-0023',
      releaseDate : 'March 18, 2019',
      price : 32.99,
      description : '15 gallon capacity rolling garden cart',
      starRating : 4.2,
      imageUrl : 'https://picsum.photos/100'
    },
    {
      productId: 3,
      productName: 'Dieu Hoa',
      productCode : 'GDN-0023',
      releaseDate : 'March 18, 2019',
      price : 32.99,
      description : '15 gallon capacity rolling garden cart',
      starRating : 4.2,
      imageUrl : 'https://picsum.photos/100'
    },
    {
      productId: 4,
      productName: 'Quat Tran',
      productCode : 'GDN-0023',
      releaseDate : 'March 18, 2019',
      price : 32.99,
      description : '15 gallon capacity rolling garden cart',
      starRating : 4.2,
      imageUrl : 'https://picsum.photos/100'
    }
  ]
  getProfile (){ 
    return `trash`
  }


  renderInventor() : void {
    const innerHTML = this.inventors.map(inventor => {
      return `<tr>
        <td>${inventor.id}</td>
        <td>${inventor.first}</td>
        <td>${inventor.last}</td>
        <td>${inventor.year}</td>
        <td>${inventor.passed}</td>
      </tr>`;
    }).join('');
    const tableTbody = document.querySelector("#inventor");
    if(tableTbody) {
      tableTbody.innerHTML = innerHTML;
    }
  }

  renderProduct():void {
    const innerHTML = this.products.map (product => { 
      return `<tr>
        <td><img src="${product.imageUrl}" alt="${product.productName}" /></td>
        <td>${product.productName}</td>
        <td>${product.productCode}</td>
        <td>${product.releaseDate}</td>
        <td>${product.price}</td>
        <td>${product.starRating}</td>
        </tr>`
    }).join("");
    const tableProduct = document.querySelector("#product");
    if(tableProduct) {
      tableProduct.innerHTML = innerHTML;
    }
  }

 }

