import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Core/Services/products.service';
import { Product } from 'src/app/Core/Models/product';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.component.html',
  styleUrls: ['./details-produits.component.css'],
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor,FormsModule, MatIconModule,],
  providers: [DecimalPipe],
})
export class DetailsProduitsComponent implements OnInit {
  productsList: Product[] = [];
  productsCrustacesList: Product[] = [];
  selectedProduct: Product | undefined;

  product = { isEditing: false, };
  constructor(private productsService: ProductsService) {


   }

  ngOnInit() {
    this.getProducts();
    this.getProductsCrustacesList();
  }

  getProducts() {
    this.productsService.getProductsFromJson().subscribe({
      next: (res: Product[]) => {
        this.productsList = res;

      },
      error: (e) => alert(e)
    });
  }
  getProductsCrustacesList() {
    this.productsService.getProductsFromJson().subscribe({
      next: (res: Product[]) => {
        this.productsCrustacesList = res.filter(product => product.category === 1);

      },
      error: (e) => alert(e)
    });
  }

  getProduit(id: number): Product | undefined {
    return this.productsList.find(product => product.id === id);
  }
  getProductCrustacesList(id: number): Product | undefined {
    return this.productsCrustacesList.find(product => product.id === id);
  }



  toggleEditMode(product: any) {
    product.isEditing = !product.isEditing;
  }

  saveProduct(product: any) {
    product.isEditing = true;
  }

  enableEditModeForAll() {
    this.product.isEditing = true;
    for (const product of this.productsList) {
      product.isEditing = true;
    }
  }

  saveAllProducts() {
    this.product.isEditing = false;
    for (const product of this.productsList) {
      if (product.isEditing) {
        this.saveProduct(product);
      }
    }
  }

  cancelAllEdits() {
    this.product.isEditing = false;
    for (const product of this.productsList) {
      if (product.isEditing) {
        this.toggleEditMode(product);
      }
    }
}
calculatePercentageDiscount(product: Product): number {
  return ((product.price) / ((product.price_on_sale / 100)+1 ));
}







}
