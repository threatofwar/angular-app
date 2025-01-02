import { AuthService } from '../../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) {}

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next: () => {
          this.authService.isAuthenticated().subscribe({
            next: (authenticated) => {
              if (authenticated) {
                console.log('User is authenticated');
                this.router.navigate(['/home']);
              } else {
                console.error('Authentication failed');
              }
            },
            error: (err) => {
              console.error('Error verifying authentication:', err);
            }
          });

          console.log('Cookie (access_token):', this.cookieService.get('access_token'));
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });
    }
  }
  // onSubmit() {
  //   if (this.username && this.password) {
  //     this.authService.login(this.username, this.password).subscribe({
  //       next: (response) => {
  //         this.router.navigate(['/home']);
  //         console.log('check: ', this.cookieService.get('access_token'));
  //       },
  //       error: (err) => {
  //         console.error('Login failed', err);
  //       }
  //     });
  //   }
  // }
}
