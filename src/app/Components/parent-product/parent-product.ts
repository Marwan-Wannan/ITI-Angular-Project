import { Component } from '@angular/core';
import { Products } from "../product/product";
import { FormsModule } from '@angular/forms';
import { ICategory } from './../../Models/icategory';
import { IProduct } from './../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { DiscountpricePipe } from '../../Pipes/discountprice.pipe';

@Component({
  selector: 'app-parent-product',
  imports: [Products, FormsModule, CommonModule],
  templateUrl: './parent-product.html',
  styleUrl: './parent-product.scss'
})
export class ParentProduct {

  filterCategoryID: number = 0;
  Categories: ICategory[] = [
    { ID: 0, Name: 'All' },
    { ID: 1, Name: 'Table' },
    { ID: 2, Name: 'Chair' },
    { ID: 3, Name: 'TV Unit' },
  ];

  TotalPrice: number = 0;

  cartItems: {Product:IProduct, Quantity:number, PurchaseDate: Date}[] = [];
  cart(prd: IProduct) {

    const item = this.cartItems.find(item => item.Product.id === prd.id);
    if (item) {
      item.Quantity++;
    } else {
      this.cartItems.push({Product: prd, Quantity: 1, PurchaseDate: new Date(Date.now())});
    }
    this.TotalPrice += prd.price;
    
  }


}
