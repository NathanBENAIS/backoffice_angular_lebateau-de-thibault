import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importez le HttpClient
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { } // Injectez le HttpClient ici

  getProductsFromJson() {
    return this.http.get<Product[]>("../../../assets/data/Products.json");
  }
}
