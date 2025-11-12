import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

  goBack() {
    window.history.back();
  }

  popularRoutes = [
    { name: 'Home', route: '/', icon: 'bi-house-door' },
    { name: 'Products', route: '/Products', icon: 'bi-bag' },
    { name: 'About Us', route: '/About', icon: 'bi-info-circle' },
    { name: 'Contact', route: '/Contact', icon: 'bi-telephone' }
  ];

  errorMessages = [
    "Oops! This page went furniture shopping and didn't come back!",
    "404: This page is as missing as your missing sock!",
    "Looks like this page took a permanent vacation!",
    "This page is playing hide and seek... and winning!",
    "Error 404: Page not found, but our furniture is still here!"
  ];

  currentErrorMessage = this.errorMessages[Math.floor(Math.random() * this.errorMessages.length)];

  animateNumber = false;

  ngOnInit() {
    setTimeout(() => {
      this.animateNumber = true;
    }, 500);
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
