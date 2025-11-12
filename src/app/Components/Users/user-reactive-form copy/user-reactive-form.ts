import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService, User } from '../../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reactive-form',
  imports: [ReactiveFormsModule, NgClass, CommonModule],
  templateUrl: './user-reactive-form.html',
  styleUrl: './user-reactive-form.scss'
})
export class LoginComponent {
  userForm: FormGroup;
  isSubmitting = false;
  submitMessage = '';
  submitMessageType = '';

  constructor(private fb: FormBuilder, private userService: UserService , private router: Router) {
    this.userForm = this.fb.group({
      // fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      // mobileNumbers: this.fb.array([
      //   this.createMobileControl()
      // ]),
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter methods for easy access to form controls
  // get fullName() {
  //   return this.userForm.get('fullName');
  // }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  // get mobileNumbers(): FormArray {
  //   return this.userForm.get('mobileNumbers') as FormArray;
  // }

  // Create a new mobile number form control with pattern validation
  // createMobileControl(): FormControl {
  //   return new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(/^[+]?[\d\s\-\(\)]{10,15}$/) 
  //   ]);
  // }

  // Add another mobile number field
  // addMobileNumber() {
  //   this.mobileNumbers.push(this.createMobileControl());
  // }

  // // Remove mobile number field (only if more than one exists)
  // removeMobileNumber(index: number) {
  //   if (this.mobileNumbers.length > 1) {
  //     this.mobileNumbers.removeAt(index);
  //   }
  // }

  // Get mobile number control by index
  // getMobileControl(index: number): FormControl {
  //   return this.mobileNumbers.at(index) as FormControl;
  // }

  // Check if field has specific error
  hasError(controlName: string, errorType: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control?.hasError(errorType) && (control.touched || control.dirty));
  }

  // Check if mobile field has specific error
  // hasMobileError(index: number, errorType: string): boolean {
  //   const control = this.getMobileControl(index);
  //   return !!(control?.hasError(errorType) && (control.touched || control.dirty));
  // }

  // Get error message for a field
  // getErrorMessage(controlName: string): string {
  //   const control = this.userForm.get(controlName);
  //   if (control?.errors && (control.touched || control.dirty)) {
  //     if (control.errors['required']) return `${controlName} is required`;
  //     if (control.errors['minlength']) {
  //       const requiredLength = control.errors['minlength'].requiredLength;
  //       return `${controlName} must be at least ${requiredLength} characters`;
  //     }
  //     if (control.errors['email']) return 'Please enter a valid email address';
  //     if (control.errors['pattern']) return `Please enter a valid ${controlName}`;
  //   }
  //   return '';
  // }

  // Get error message for mobile field
  // getMobileErrorMessage(index: number): string {
  //   const control = this.getMobileControl(index);
  //   if (control?.errors && (control.touched || control.dirty)) {
  //     if (control.errors['required']) return 'Mobile number is required';
  //     if (control.errors['pattern']) return 'Please enter a valid mobile number (10-15 digits)';
  //   }
  //   return '';
  // }

  // Check if field is valid and touched
  isFieldValid(controlName: string): boolean {
    const control = this.userForm.get(controlName);
    return !!(control?.valid && (control.touched || control.dirty));
  }

  // Check if mobile field is valid and touched
  // isMobileFieldValid(index: number): boolean {
  //   const control = this.getMobileControl(index);
  //   return !!(control?.valid && (control.touched || control.dirty));
  // }

  // Submit the form login
  onSubmit() {
    if (this.userForm.valid) {
      this.isSubmitting = true;
      this.submitMessage = '';
      
      // Prepare user data
      const formValue = this.userForm.value;
      // const userData: User = {
      //   fullName: formValue.fullName,
      //   email: formValue.email,
      //   mobileNumbers: formValue.mobileNumbers.filter((mobile: string) => mobile.trim() !== ''),
      //   password: formValue.password
      // };

      // Call API service
      this.userService.login(formValue.email, formValue.password).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitMessage = 'User logged in successfully!';
          this.submitMessageType = 'success';
          this.resetForm();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitMessage = 'login failed. Please try again.';
          this.submitMessageType = 'danger';
          console.error('Login error:', error);
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      this.markFormGroupTouched();
    }
  }

  // Mark all form controls as touched
  private markFormGroupTouched() {
    Object.keys(this.userForm.controls).forEach(key => {
      const control = this.userForm.get(key);
      control?.markAsTouched();
      
      if (control instanceof FormArray) {
        control.controls.forEach(c => c.markAsTouched());
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/UsersignUpreactive']);
  }

  

  // Reset the form
  private resetForm() {
    this.userForm.reset();
    // Reset mobile numbers array to have only one field
    // while (this.mobileNumbers.length > 1) {
    //   this.mobileNumbers.removeAt(1);
    // }
    // Reset submission state
    setTimeout(() => {
      this.submitMessage = '';
    }, 5000);
  }
}
