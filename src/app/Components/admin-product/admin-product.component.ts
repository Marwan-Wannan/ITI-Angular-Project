import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductWithAPIService } from '../../Services/ProductService-With-API.service';
import { CategoryService } from '../../Services/categoryservice.service';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';

@Component({
  selector: 'app-admin-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  productForm: FormGroup;
  categories: ICategory[] = [];
  isEditMode = false;
  productId: number | null = null;
  pageTitle = 'Add New Product';

  constructor(
    private fb: FormBuilder,
    private productService: ProductWithAPIService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      thumbnail: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
      category: ['furniture', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Load categories
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });

    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.productId = +params['id'];
        this.pageTitle = 'Edit Product';
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id.toString()).subscribe({
      next: (product) => {
        this.productForm.patchValue({
          title: product.title,
          price: product.price,
          stock: product.stock,
          thumbnail: product.thumbnail,
          category: product.category || 'furniture',
          description: product.description || ''
        });
      },
      error: (error) => {
        console.error('Error loading product:', error);
        alert('Error loading product details');
        this.router.navigate(['/products']);
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData: Partial<IProduct> = {
        ...this.productForm.value
      };

      if (this.isEditMode) {
        // Update existing product
        this.productService.updateProduct(this.productId!, productData).subscribe({
          next: (response) => {
            console.log('Product updated:', response);
            alert('Product updated successfully!');
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.error('Error updating product:', error);
            alert('Error updating product. Please try again.');
          }
        });
      } else {
        // Add new product
        this.productService.addProduct(productData).subscribe({
          next: (response) => {
            console.log('Product added:', response);
            alert(`Product "${response.title}" added successfully with ID: ${response.id}`);
            this.router.navigate(['/products']);
          },
          error: (error) => {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
          }
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }

  // Helper methods for template
  hasError(field: string, errorType: string): boolean {
    const control = this.productForm.get(field);
    return !!(control?.hasError(errorType) && control.touched);
  }

  getError(field: string): string {
    const control = this.productForm.get(field);
    if (control?.errors && control.touched) {
      if (control.errors['required']) return `${field} is required`;
      if (control.errors['minlength']) return `${field} must be at least ${control.errors['minlength'].requiredLength} characters`;
      if (control.errors['min']) return `${field} must be greater than ${control.errors['min'].min}`;
      if (control.errors['pattern']) return `Please enter a valid URL`;
    }
    return '';
  }
}
