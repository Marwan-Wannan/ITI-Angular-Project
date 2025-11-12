import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./Components/footer/footer";
import { Navbar } from "./Components/navbar/navbar";
import { Sidebar } from "./Components/sidebar/sidebar";
import { Products } from "./Components/product/product";
import { ParentProduct } from "./Components/parent-product/parent-product";

@Component({
  selector: 'app-root',
  imports: [Footer, Navbar, ParentProduct, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angularTest2');
}
