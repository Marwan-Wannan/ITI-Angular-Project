# Quick Start Guide - Angular Furniture Store

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   Or:
   ```bash
   ng serve
   ```

3. **Open in Browser**
   Navigate to: `http://localhost:4200`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── product/              # Product listing page
│   │   ├── Product-details/      # Single product view
│   │   ├── admin-product/        # Add/Edit product form
│   │   ├── home/                 # Home page
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact page
│   │   ├── navbar/               # Navigation bar
│   │   └── footer/               # Footer component
│   ├── Services/
│   │   └── ProductService-With-API.service.ts  # API service
│   ├── Models/
│   │   └── iproduct.ts           # Product interface
│   ├── Guard/
│   │   └── route-guard.ts        # Route protection
│   └── environments/
│       ├── environment.ts
│       └── environment.development.ts
```

---

## 🌐 API Information

**Base URL**: `https://dummyjson.com`

### Available Endpoints:

1. **Get Furniture Products**
   ```
   GET /products/category/furniture
   ```

2. **Get Single Product**
   ```
   GET /products/{id}
   ```

3. **Add Product**
   ```
   POST /products/add
   Content-Type: application/json
   
   Body:
   {
     "title": "Product Name",
     "price": 299,
     "stock": 50,
     "category": "furniture",
     "description": "Product description",
     "thumbnail": "https://..."
   }
   ```

4. **Update Product**
   ```
   PUT /products/{id}
   Content-Type: application/json
   ```

5. **Delete Product**
   ```
   DELETE /products/{id}
   ```

---

## 🎨 Features

### User Features:
- ✅ Browse furniture products
- ✅ View product details
- ✅ Filter by category
- ✅ Add to cart
- ✅ Responsive design

### Admin Features:
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Form validation

---

## 🛠️ Build for Production

```bash
npm run build
```

Or:
```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

---

## 🧪 Running Tests

### Unit Tests
```bash
npm test
```
Or:
```bash
ng test
```

### End-to-End Tests
```bash
npm run e2e
```

---

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `ng generate component <name>` | Generate new component |
| `ng generate service <name>` | Generate new service |

---

## 🔧 Configuration

### Change API Base URL
Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  BaseURL: 'https://your-api-url.com'
};
```

### Add New Routes
Edit `src/app/app.routes.ts`:

```typescript
export const routes: Routes = [
  { path: 'new-route', component: YourComponent, title: 'Page Title' },
  // ... other routes
];
```

---

## 📱 Pages Overview

1. **Home** (`/Home`)
   - Landing page with store information

2. **Products** (`/Products`)
   - List of all furniture products
   - Filter by category
   - Add to cart functionality

3. **Product Details** (`/Product/:id`)
   - Detailed product view
   - Multiple images
   - Specifications
   - Related products

4. **Admin** (`/admin/product`)
   - Add new product form
   - Product management

5. **Edit Product** (`/admin/editproduct/:id`)
   - Edit existing product details

6. **About** (`/About`)
   - About the store

7. **Contact** (`/Contact`)
   - Contact information

---

## 🎯 Key Technologies

- **Angular**: 18+
- **TypeScript**: 5.5+
- **Bootstrap**: 5.3
- **RxJS**: 7.8+
- **Font Awesome**: Icons
- **Bootstrap Icons**: Additional icons

---

## 💡 Tips for Portfolio

1. **Highlight Features**:
   - RESTful API integration
   - Reactive forms with validation
   - Component-based architecture
   - Responsive design
   - TypeScript type safety

2. **Showcase Skills**:
   - Angular framework expertise
   - HTTP client usage
   - State management with RxJS
   - Modern UI/UX design
   - Form handling and validation

3. **Demo Points**:
   - Show CRUD operations
   - Demonstrate routing
   - Explain component communication
   - Showcase error handling

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
ng serve --port 4300
```

### Clear Cache
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Update Angular CLI
```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@latest
```

---

## 📞 Support

For issues or questions:
- Check DummyJSON documentation: https://dummyjson.com/docs
- Angular documentation: https://angular.dev
- Bootstrap documentation: https://getbootstrap.com

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**License**: MIT
