import { AdminProductComponent } from './Components/admin-product/admin-product.component';
import { UserReactiveForm } from './Components/Users/user-reactive-form/user-reactive-form';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductDetailsComponent } from './Components/Product-details/Product-details.component';
import { Products } from './Components/product/product';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ParentProduct } from './Components/parent-product/parent-product';
import { routeGuard } from './Guard/route-guard';
import { AddComponent } from "./Components/Add/Add.component";
import { LoginComponent } from './Components/Users/user-reactive-form copy/user-reactive-form';

export const routes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full' },
    { path: 'Home', component: HomeComponent, title: 'Home' },
    { path: 'Products', component: Products, title: 'Products' },
    { path: 'Contact', component: ContactComponent, title: 'Contact' },
    { path: 'ProductsParent', component: ParentProduct, title: 'Products Parent' },
    { path: 'About', component: AboutComponent, title: 'About' },
    { path: 'NotFound', component: NotFoundComponent, title: 'Not Found' },
    { path: 'Product/:PrdID', component: ProductDetailsComponent, title: 'Product details' },
    { path: 'admin/product', component: AdminProductComponent, title: 'Add Product' },
    { path: 'admin/editproduct/:id', component: AdminProductComponent, title: 'Edit Product' },
    { path: 'UsersignUpreactive', component: UserReactiveForm, title: 'User Sign Up Reactive' },
    { path: 'UserLogin', component: LoginComponent, title: 'User Login' },
    { path: 'AddNewProduct', component: AddComponent, title: 'Add New Product' },
    { path: '**', redirectTo: 'NotFound' }
];
