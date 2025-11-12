import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../../Services/ProductService.service';
import { ProductWithAPIService } from '../../Services/ProductService-With-API.service';
import { IProduct } from './../../Models/iproduct';
import { ICategory } from './../../Models/icategory';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-Product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './Product-details.component.html',
  styleUrls: ['./Product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  prdId: number = 0;
  product: IProduct | undefined = undefined;
  selectedQuantity: number = 1;
  selectedImage: string = '';
  currentImageIndex: number = 0;
  isLoading: boolean = true;
  allProducts: IProduct[] = [];
  private sub!: Subscription;



  productImages: string[] = [];


  relatedProducts: IProduct[] = [];


  specifications = [
    { label: 'Material', value: '' },
    { label: 'Dimensions', value: '120cm x 60cm x 75cm' },
    { label: 'Weight', value: '25kg' },
    { label: 'Color Options', value: 'Available in 5 colors' },
    { label: 'Assembly Required', value: 'Yes (Tools included)' },
    { label: 'Warranty', value: '2 Years' }
  ];


  customerReviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      date: '2024-09-15',
      comment: 'Absolutely love this piece! Great quality and exactly as described. Fast delivery too!',
      verified: true,
      helpful: 12
    },
    {
      name: 'Michael Chen',
      rating: 4,
      date: '2024-09-10',
      comment: 'Good quality furniture, but assembly took longer than expected. Overall satisfied with the purchase.',
      verified: true,
      helpful: 8
    },
    {
      name: 'Emily Davis',
      rating: 5,
      date: '2024-09-05',
      comment: 'Perfect fit for my living room! The material feels premium and the design is beautiful.',
      verified: false,
      helpful: 15
    }
  ];

  activeTab: string = 'description';


  categories: ICategory[] = [
    { ID: 1, Name: 'Tables' },
    { ID: 2, Name: 'Chairs' },
    { ID: 3, Name: 'TV Units' }
  ];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productWithAPIService: ProductWithAPIService
  ) { }

  ngOnInit(): void {

    this.productWithAPIService.getAllProducts().subscribe(products => {
      this.allProducts = products;
    });


    this.sub = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.prdId = Number(params.get('PrdID')) || 0;
      this.productWithAPIService.getProductById(this.prdId.toString()).subscribe({
        next: (prd) => {
          this.product = prd;

        },
        error: (err) => {
          console.error('Error fetching product:', err);
          this.router.navigate(['']);
        }
      });


      console.log(this.product, this.prdId);
      if (this.product) {
        this.initializeProductData();
      }


    });
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }






  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  initializeProductData(): void {
    if (!this.product) return;

    this.selectedImage = this.product.thumbnail;
    this.productImages = this.product.images && this.product.images.length > 0 
      ? this.product.images 
      : [this.product.thumbnail];
    
    if (this.product.dimensions) {
      this.specifications[1].value = `${this.product.dimensions.width}cm x ${this.product.dimensions.depth}cm x ${this.product.dimensions.height}cm`;
    }
    if (this.product.weight) {
      this.specifications[2].value = `${this.product.weight}kg`;
    }
    if (this.product.warrantyInformation) {
      this.specifications[5].value = this.product.warrantyInformation;
    }
    
    this.loadRelatedProducts();
  }

  loadRelatedProducts(): void {
    if (!this.product) return;

    this.productWithAPIService.getAllProducts().subscribe(products => {
      this.relatedProducts = products
        .filter(p => p.category === this.product!.category && p.id !== this.product!.id)
        .slice(0, 4);
    });
  }

  changeImage(index: number): void {
    this.currentImageIndex = index;
    this.selectedImage = this.productImages[index];
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.productImages.length;
    this.selectedImage = this.productImages[this.currentImageIndex];
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.productImages.length - 1
      : this.currentImageIndex - 1;
    this.selectedImage = this.productImages[this.currentImageIndex];
  }

  addToCart(): void {
    if (!this.product) return;

    console.log(`Added ${this.selectedQuantity} x ${this.product.title} to cart`);
    alert(`${this.selectedQuantity} x ${this.product.title} added to cart!`);
  }

  buyNow(): void {
    if (!this.product) return;

    console.log(`Buy now: ${this.selectedQuantity} x ${this.product.title}`);
    alert('Redirecting to checkout...');
  }

  addToWishlist(): void {
    if (!this.product) return;

    console.log(`Added ${this.product.title} to wishlist`);
    alert(`${this.product.title} added to wishlist!`);
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.ID === categoryId);
    return category ? category.Name : 'Unknown';
  }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, index) => index < rating ? 1 : 0);
  }

  getAverageRating(): number {
    if (this.customerReviews.length === 0) return 0;
    const sum = this.customerReviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / this.customerReviews.length;
  }

  getAverageRatingFloor(): number {
    return Math.floor(this.getAverageRating());
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  viewRelatedProduct(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  get currentIndex(): number {
    if (!this.product) return -1;
    return this.allProducts.findIndex(p => p.id === this.product!.id);
  }


  nextProduct(): void {
    const next = this.allProducts[this.currentIndex + 1] || this.allProducts[0];
    this.router.navigate(['/Product', next.id]);
  }

  previousProduct(): void {
    const prev = this.allProducts[this.currentIndex - 1] || this.allProducts[this.allProducts.length - 1];
    this.router.navigate(['/Product', prev.id]);
  }

}
