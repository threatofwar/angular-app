import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  username: string | null = null;

  // Inject AuthService and CookieService into the constructor
  constructor(private cookieService: CookieService, private authService: AuthService) {}

  ngOnInit(): void {
    // Retrieve the username or any cookie-based value set during login
    this.username = this.cookieService.get('username') || null;
  }

  onLogoutClick() {
    console.log('Logging out...');
    this.authService.logout(); // Call logout from the AuthService
  }
}
