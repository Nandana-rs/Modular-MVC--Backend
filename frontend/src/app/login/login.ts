import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  email = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.message = '';

    if (!this.email || !this.password) {
      this.message = 'Both fields are required.';
      return;
    }

    const userData = {
      email: this.email,
      password: this.password,
    };

    ajax.post('http://localhost:3000/api/login', userData, {
      'Content-Type': 'application/json',
    }).pipe(
      catchError((error) => {
        console.error('Login error:', error);
        this.message = error?.response?.message || 'Login failed.';
        return of(null);
      })
    ).subscribe((response: any) => {
      if (response && response.status === 200) {
        const user = response.response;

        this.message = 'Login successful!';

        // Store details if needed
        localStorage.setItem('user', JSON.stringify(user));

        setTimeout(() => {
          if (user.role === 'admin') {
            this.router.navigate(['/admindashboard']); // 👈 Admin redirect
          } else {
            this.router.navigate(['/dashboard']);       // 👈 User redirect
          }
        }, 1000);

      } else {
        this.message = response?.response?.message || 'Invalid credentials.';
      }
    });
  }
}
