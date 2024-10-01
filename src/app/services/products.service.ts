import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API : string = `http://localhost:3000/products`
  constructor(private http : HttpClient ) { }
  getProducts(){

  }
  getProductsById(id : number){ }

  removeProducts(id : number){ }

  addProducts(product : IProduct){ }

  updateProducts(product : IProduct){}
}

