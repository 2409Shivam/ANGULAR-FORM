// src/app/landing_page/landing/landing.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  user: User = {
    fullName: '',
    email: '',
    password: '',
    mobile: '',
    dob: ''
  };

  constructor(private userService: UserService, private router: Router) {}

  // onSubmit() {
  //   this.userService.registerUser(this.user).subscribe({
  //     next: (res) => {
  //       console.log('Registered:', res);
  //       this.router.navigate(['/registered']);
  //     },
  //     error: (err) => {
  //       console.error('Registration failed:', err);
  //     }
  //   });
  // }
  onSubmit() {
  this.userService.registerUser(this.user).subscribe({
    next: (res) => {
      console.log('Registered:', res);
      this.router.navigate(['/registered']);
    },
    error: (err) => {
      if (err.status === 409) {
        alert('User with this email or mobile number already exists!');
      } else {
        console.error('Registration failed:', err);
      }
    }
  });
}
}
