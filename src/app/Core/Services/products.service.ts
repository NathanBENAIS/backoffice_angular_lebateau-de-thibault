import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importez le HttpClient
import { Product } from '../Models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://127.0.0.1:8000'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // getProductsFromJson(): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiUrl}/?format=json`);
  // }
  public getProductsFromJson(): Observable<Product[]> {
    console.log(this.http.get<Product[]>(this.apiUrl + '/infoproducts/'));
    return this.http.get<Product[]>(this.apiUrl + '/infoproducts/');
  }

  // Méthode pour mettre à jour un produit
  // updateProduct(product: Product): Observable<Product> {
  //   const url = `${this.apiUrl}/putonsale/${product.id}/${product.discount}`;
  //   return this.http.get<Product>(url);
  // }
  updateProduct(product: Product): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + "/putonsale/" + product.tig_id + "/" + product.discount);
  }

  // public updateProduct(products: Product[]): Observable<Product[]> {
  //   console.log(products);
  //   return this.http.put<Product[]>(this.apiUrl + '/putonsale/' + {product.id}, products);
  // }

}
