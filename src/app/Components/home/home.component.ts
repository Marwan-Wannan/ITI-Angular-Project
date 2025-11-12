import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    {
      icon: 'bi-house-fill',
      title: 'Quality Furniture',
      description: 'Discover premium furniture crafted with the finest materials and attention to detail.'
    },
    {
      icon: 'bi-truck',
      title: 'Free Delivery',
      description: 'Enjoy free delivery on all orders above $500. We bring comfort right to your doorstep.'
    },
    {
      icon: 'bi-shield-check',
      title: '2 Year Warranty',
      description: 'All our products come with a comprehensive 2-year warranty for your peace of mind.'
    },
    {
      icon: 'bi-headset',
      title: '24/7 Support',
      description: 'Our customer support team is available round the clock to assist you with any queries.'
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing quality furniture! The dining table I bought is absolutely perfect for my home.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Excellent customer service and fast delivery. Highly recommend this store!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Davis',
      rating: 4,
      comment: 'Great variety of furniture and competitive prices. Will definitely shop here again.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];
}
