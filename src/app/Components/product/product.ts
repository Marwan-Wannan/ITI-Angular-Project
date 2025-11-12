import { CategoryService } from './../../Services/categoryservice.service';
import { ProductWithAPIService } from './../../Services/ProductService-With-API.service';
import { ProductService } from './../../Services/ProductService.service';
import { ICategory } from './../../Models/icategory';
import { IProduct } from './../../Models/iproduct';
import { DiscountOffers } from './../../Models/discount-offers';
import { Store } from './../../Models/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiscountpricePipe } from '../../Pipes/discountprice.pipe';
import { Router, RouterLink } from '@angular/router';




@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, DiscountpricePipe, RouterLink],
  templateUrl: './product.html',
  styleUrls: ['./product.scss'],
})
export class Products implements OnInit {

  date1: Date = new Date();
  Discount: DiscountOffers = DiscountOffers.NoDiscount;
  flagLogo: boolean = true;
  store: Store = new Store(
    "Abo talat Market",
    ["New York", "Los Angeles", "Nag3 7amadi"],
    "storeLogo.webp"
  );

  ClientName: string = "Wannan jr";

  filteredProducts: IProduct[] = [];

  constructor(private ProductService: ProductService, private router: Router, private ProductWithAPIService: ProductWithAPIService, private CategoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.ProductWithAPIService.getAllProducts().subscribe(products => {
      this.filteredProducts = products;
    });

    this.CategoryService.getAllCategories().subscribe(cats => {
      this.Categories = cats;
      console.log(this.Categories);
      
    });
    
    }





  set filterCategoryID(v: string) {

    this.ProductWithAPIService.PerformFilter(v).subscribe(products => {
      this.filteredProducts = products;
    });
    console.log(this.filteredProducts);
  }


  toggleLogo() {
    this.flagLogo = !this.flagLogo;
  }



  @Output() addtocartevent = new EventEmitter<IProduct>();
  @Input() set filterValueInChild(value: number) {
    if (value == 0) {

      this.ProductWithAPIService.getAllProducts().subscribe(products => {
        this.filteredProducts = products;
      });
    } else {

      this.ProductWithAPIService.getProductsByCategory(value.toString()).subscribe(products => {
        this.filteredProducts = products;
      });
    }
  }



  addTocart(item: IProduct) {
    this.addtocartevent.emit(item);
  }


  getCategoryName(categoryID: number): string {
    let categoryName = 'Unknown';
    this.CategoryService.getCategoryById(String(categoryID)).subscribe(cat => {
      categoryName = cat.Name;
    });
    return categoryName;
  }
  Categories: ICategory[] = [];

  editProduct(product: IProduct) {

    this.router.navigate(['/admin/editproduct', product.id]);
  }

  deleteProduct(product: IProduct) {

    if (confirm(`Are you sure you want to delete "${product.title}"? This action cannot be undone.`)) {

      this.ProductWithAPIService.deleteProduct(product.id).subscribe({
        next: () => {

          this.filteredProducts = this.filteredProducts.filter(p => p.id !== product.id);
          alert('Product deleted successfully!');
        },
        error: (error) => {
          console.error('Error deleting product:', error);
          alert('Failed to delete product. Please try again.');
        }
      });
    }
  }


}

