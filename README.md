<div align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" width="120" height="120">
  
  # 🛋️ Furniture Store - Angular E-Commerce
  
  ### Modern Furniture Store built with Angular 18+ & DummyJSON API
  
  [![Angular](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
  [![DummyJSON](https://img.shields.io/badge/API-DummyJSON-success?style=for-the-badge)](https://dummyjson.com)
  
  [Live Demo](#) • [Features](#-features) • [Installation](#-quick-start) • [Documentation](#-documentation)
  
  **Read this in other languages**: [العربية](./README_AR.md)
  
</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Screenshots](#-screenshots)
- [Key Learnings](#-key-learnings)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

A **full-featured e-commerce application** for furniture shopping, built with **Angular 18+** and integrated with the **DummyJSON API**. This project demonstrates modern Angular development practices, including reactive forms, component-based architecture, HTTP client integration, and responsive design.

### ✨ What Makes This Special?

- 🎯 **Real API Integration**: Fetches furniture products from DummyJSON API
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- 🔐 **Route Guards**: Protected admin routes
- 📝 **Form Validation**: Reactive forms with custom validators
- 🎨 **Modern UI/UX**: Beautiful interface with Bootstrap 5
- 🔄 **CRUD Operations**: Complete Create, Read, Update, Delete functionality

---

## 🚀 Features

### 🛍️ Customer Features
- ✅ Browse furniture products with filtering
- ✅ View detailed product information with images
- ✅ Add products to shopping cart
- ✅ Responsive product gallery with thumbnails
- ✅ Real-time stock availability
- ✅ Product search and filtering by category
- ✅ Discount display and pricing

### 👨‍💼 Admin Features
- ✅ Add new furniture products
- ✅ Edit existing products
- ✅ Delete products with confirmation
- ✅ Form validation and error handling
- ✅ Image preview before upload

### 🎯 Technical Features
- ✅ RESTful API integration
- ✅ RxJS for async operations
- ✅ Reactive Forms with validation
- ✅ Component-based architecture
- ✅ Route guards and lazy loading
- ✅ TypeScript strict mode
- ✅ Clean code practices

---

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center" width="96">
      <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="48" height="48" alt="Angular" />
      <br>Angular 18+
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="48" height="48" alt="TypeScript" />
      <br>TypeScript
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap 5
    </td>
    <td align="center" width="96">
      <img src="https://rxjs.dev/assets/images/logos/Rx_Logo_S.png" width="48" height="48" alt="RxJS" />
      <br>RxJS
    </td>
    <td align="center" width="96">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="48" height="48" alt="SCSS" />
      <br>SCSS
    </td>
  </tr>
</table>

### Core Technologies
- **Framework**: Angular 18+
- **Language**: TypeScript 5.5+
- **Styling**: Bootstrap 5 + SCSS
- **HTTP Client**: Angular HttpClient
- **State Management**: RxJS Observables
- **Forms**: Reactive Forms
- **Routing**: Angular Router
- **API**: DummyJSON REST API

---

## ⚡ Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Angular CLI** (`npm install -g @angular/cli`)

### Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/Marwan-Wannan/ITI-Angular-Project.git
cd ITI-Angular-Project
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Start development server**
```bash
npm start
# or
ng serve
```

4️⃣ **Open your browser**
```
http://localhost:4200
```

### Build for Production

```bash
npm run build
# or
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── Components/
│   │   ├── home/                 # Home page
│   │   ├── product/              # Product listing
│   │   ├── Product-details/      # Single product view
│   │   ├── admin-product/        # Admin CRUD
│   │   ├── parent-product/       # Shopping cart
│   │   ├── navbar/               # Navigation
│   │   └── footer/               # Footer
│   ├── Services/
│   │   ├── ProductService-With-API.service.ts    # API service
│   │   ├── category.service.ts                   # Category service
│   │   └── user-auth.service.ts                  # Auth service
│   ├── Models/
│   │   ├── iproduct.ts           # Product interface
│   │   └── icategory.ts          # Category interface
│   ├── Guard/
│   │   └── route-guard.ts        # Route protection
│   └── Pipes/
│       └── discountprice.pipe.ts # Price calculation
├── environments/
│   ├── environment.ts
│   └── environment.development.ts
└── assets/                        # Static files
```

---

## 🔌 API Integration

This project uses the **DummyJSON API** for product data.

### Base URL
```typescript
https://dummyjson.com
```

### Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products/category/furniture` | Get all furniture products |
| GET | `/products/{id}` | Get single product details |
| POST | `/products/add` | Add new product |
| PUT | `/products/{id}` | Update product |
| DELETE | `/products/{id}` | Delete product |

### Example Response

```json
{
  "products": [
    {
      "id": 6,
      "title": "Wooden Dining Table",
      "description": "Beautiful handcrafted table",
      "price": 299.99,
      "discountPercentage": 5.5,
      "rating": 4.5,
      "stock": 12,
      "brand": "HomeStyle",
      "category": "furniture",
      "thumbnail": "https://...",
      "images": ["..."]
    }
  ]
}
```

---

## 📸 Screenshots

<div align="center">

### Home Page
*Modern landing page with hero section*

### Product Listing
*Browse furniture with filtering and search*

### Product Details
*Detailed view with image gallery and specifications*

### Admin Panel
*Add and manage products*

</div>

---

## 💡 Key Learnings

This project demonstrates proficiency in:

- ✅ **Angular Framework**: Component lifecycle, services, dependency injection
- ✅ **TypeScript**: Type safety, interfaces, generics
- ✅ **RxJS**: Observables, operators, async data handling
- ✅ **HTTP Client**: REST API integration, error handling
- ✅ **Reactive Forms**: Form validation, custom validators
- ✅ **Routing**: Navigation, route guards, lazy loading
- ✅ **State Management**: Component communication, data flow
- ✅ **Responsive Design**: Mobile-first approach with Bootstrap
- ✅ **Clean Code**: Best practices, code organization

---

## 📚 Documentation

For detailed documentation, check out:

- [**PROJECT_UPDATES.md**](./PROJECT_UPDATES.md) - Complete change log and API details
- [**PROJECT_UPDATES_AR.md**](./PROJECT_UPDATES_AR.md) - Arabic documentation
- [**QUICK_START.md**](./QUICK_START.md) - Quick start guide
- [**SUMMARY_AR.md**](./SUMMARY_AR.md) - Arabic summary

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Marwan Wannan**

- GitHub: [@Marwan-Wannan](https://github.com/Marwan-Wannan)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

---

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

## 📞 Contact

Have questions or suggestions? Feel free to reach out!

---

<div align="center">
  
  **Made with ❤️ using Angular**
  
  [⬆ Back to Top](#-furniture-store---angular-e-commerce)
  
</div>
