import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 20 years in the furniture industry, John founded our company with a vision to make quality furniture accessible to everyone.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'john@furniture.com'
      }
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Sarah brings creative vision and modern aesthetics to our furniture designs, ensuring every piece is both functional and beautiful.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@furniture.com'
      }
    },
    {
      name: 'Michael Chen',
      position: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Michael ensures our operations run smoothly, from manufacturing to delivery, maintaining our high standards of quality.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@furniture.com'
      }
    },
    {
      name: 'Emily Johnson',
      position: 'Customer Relations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Emily leads our customer service team, ensuring every customer has an exceptional experience with our products and services.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@furniture.com'
      }
    }
  ];

  milestones = [
    { year: '1998', event: 'Company Founded', description: 'Started as a small family business with a dream to create beautiful furniture' },
    { year: '2005', event: 'First Showroom', description: 'Opened our first flagship showroom in downtown' },
    { year: '2012', event: 'Online Store Launch', description: 'Expanded our reach with e-commerce platform' },
    { year: '2018', event: 'Sustainable Initiative', description: 'Committed to eco-friendly and sustainable furniture production' },
    { year: '2023', event: '25 Years of Excellence', description: 'Celebrating a quarter-century of quality furniture and happy customers' }
  ];

  values = [
    {
      icon: 'bi-heart-fill',
      title: 'Quality First',
      description: 'We never compromise on the quality of materials and craftsmanship in our furniture pieces.'
    },
    {
      icon: 'bi-people-fill',
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do. Their satisfaction is our success.'
    },
    {
      icon: 'bi-leaf-fill',
      title: 'Sustainability',
      description: 'We are committed to environmental responsibility in all aspects of our business.'
    },
    {
      icon: 'bi-lightbulb-fill',
      title: 'Innovation',
      description: 'We continuously innovate to bring you the latest in furniture design and functionality.'
    }
  ];
}
