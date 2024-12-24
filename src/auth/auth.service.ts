import { ENV } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ENV.apiBaseUrl;
  private loginURL = this.apiUrl + ENV.loginEndpoint;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  login(email: string, password: string): Observable<any> {
    // Replace with real API authentication call
    return this.http.post(this.loginURL, { email, password });
  }

  logout() {
    // Handle logout (clear tokens, etc.)
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  storeToken(token: string) {
    // Store JWT token in cookie
    this.cookieService.set('jwtToken', token);
  }

  getToken() {
    // get JWT token in cookie
    return this.cookieService.get('jwtToken');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Return true if token exists, false otherwise
  }
}
