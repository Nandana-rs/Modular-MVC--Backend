import { Component } from '@angular/core';

import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  name = '';
  email = '';
  password = '';
  confirm_password = '';
  message = '';



  constructor(private router: Router) {}

  
//on submit function
onSubmit() {
  this.message = '';

  if (!this.name || !this.email || !this.password || !this.confirm_password) {
    this.message = 'All fields are required.';
    return;
  }

  if (this.password !== this.confirm_password) {
    this.message = 'Passwords do not match.';
    return;
  }

  const userData = {
    name: this.name,
    email: this.email,
    password: this.password,
    confirm_password: this.confirm_password
  };

  ajax.post('http://localhost:3000/api/register', userData, {
    'Content-Type': 'application/json'
  }).pipe(
    catchError((error) => {
      console.error('Register error:', error);
      this.message = error?.response?.message || 'Registration failed.';
      return of(null);
    })
  ).subscribe((response: any) => {
    if (response && response.status === 201) {
      this.message = response.response.message || 'Registration successful!';
      // Clear form
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirm_password = '';

      // Redirect to login after short delay
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000); // waits 2 seconds
    } else if (response?.response?.message) {
      this.message = response.response.message;
    }
  });
}

}
