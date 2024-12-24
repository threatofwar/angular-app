import { AuthService } from '../../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";


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

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          this.authService.storeToken(response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Login failed', err);
          // Handle error, show a message, etc.
        }
      });
    }
  }
}
