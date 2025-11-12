import { ProductWithAPIService } from './../../Services/ProductService-With-API.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-Add',
  imports: [FormsModule, CommonModule],
  templateUrl: './Add.component.html',
  styleUrls: ['./Add.component.css']
})
export class AddComponent {

  product:IProduct={} as IProduct;
  constructor( private ProductWithAPIService: ProductWithAPIService, private router: Router) { }

   addProduct() {

    this.ProductWithAPIService.addProduct(this.product).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['/Products'])

      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
