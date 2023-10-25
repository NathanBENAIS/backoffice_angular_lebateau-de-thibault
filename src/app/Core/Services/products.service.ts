import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importez le HttpClient
import { Product } from '../Models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://127.0.0.1:8000/infoproducts'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getProductsFromJson(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/?format=json`);
  }

  // Méthode pour mettre à jour un produit
  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`; // Assurez-vous d'avoir une propriété id dans votre modèle Product
    return this.http.put<Product>(url, product);
  }

}
