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

  login(username: string, password: string): Observable<any> {
    // Replace with real API authentication call
    return this.http.post(this.loginURL, { username, password });
  }

  logout() {
    // Handle logout (clear tokens, etc.)
    this.cookieService.deleteAll();
    this.router.navigate(['/login']);
  }

  storeToken(token: any) {
    // Store JWT token in cookie
    const isSecure = window.location.protocol === 'https:';
    const accessToken = token.access_token;
    const accessTokenExpirationDate = new Date();
    accessTokenExpirationDate.setHours(accessTokenExpirationDate.getHours() + 24); // 24 hours

    this.cookieService.set('jwtToken', accessToken, accessTokenExpirationDate, '/', '', isSecure, 'Strict');

    const refreshToken = token.refresh_token;
    const refreshTokenExpirationDate = new Date();
    refreshTokenExpirationDate.setDate(refreshTokenExpirationDate.getDate() + 7); // 7 days

    this.cookieService.set('refreshToken', refreshToken, refreshTokenExpirationDate, '/', '', isSecure, 'Strict');
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
