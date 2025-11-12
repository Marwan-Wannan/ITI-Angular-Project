import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Our Showroom',
      details: ['123 Furniture Street', 'Design District, NY 10001', 'United States'],
      color: 'text-primary'
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543', 'Mon-Sat: 9AM-7PM'],
      color: 'text-success'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      details: ['info@furniture.com', 'support@furniture.com', 'sales@furniture.com'],
      color: 'text-warning'
    }
  ];

  socialLinks = [
    { icon: 'bi-facebook', name: 'Facebook', url: '#', color: '#1877f2' },
    { icon: 'bi-instagram', name: 'Instagram', url: '#', color: '#e4405f' },
    { icon: 'bi-twitter', name: 'Twitter', url: '#', color: '#1da1f2' },
    { icon: 'bi-linkedin', name: 'LinkedIn', url: '#', color: '#0077b5' },
    { icon: 'bi-pinterest', name: 'Pinterest', url: '#', color: '#bd081c' },
    { icon: 'bi-youtube', name: 'YouTube', url: '#', color: '#ff0000' }
  ];

  faqItems = [
    {
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all items in original condition. Custom orders may have different terms.',
      isOpen: false
    },
    {
      question: 'Do you offer assembly services?',
      answer: 'Yes, we provide professional assembly services for an additional fee. Our skilled team can assemble your furniture safely and efficiently.',
      isOpen: false
    },
    {
      question: 'How long does delivery take?',
      answer: 'Standard delivery takes 7-14 business days. Express delivery options are available for select items.',
      isOpen: false
    },
    {
      question: 'Do you offer custom furniture?',
      answer: 'Absolutely! We specialize in custom furniture design. Contact our design team to discuss your specific requirements.',
      isOpen: false
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and offer financing options for qualifying purchases.',
      isOpen: false
    }
  ];

  onSubmit() {
    if (this.isFormValid()) {
      // Handle form submission here
      console.log('Form submitted:', this.contactForm);
      alert('Thank you for your message! We\'ll get back to you soon.');
      this.resetForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  isFormValid(): boolean {
    return !!(this.contactForm.name && 
             this.contactForm.email && 
             this.contactForm.subject && 
             this.contactForm.message);
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  toggleFaq(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
