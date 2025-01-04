import { ENV } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Ensure it is provided globally
})
export class AuthService {

  private loggedIn = false;
  private apiUrl = ENV.apiBaseUrl;
  private loginURL = this.apiUrl + ENV.loginEndpoint;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.loginURL, { username, password }, { withCredentials: true }).pipe(
      tap(response => console.log('Login response:', response)),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  logout() {
    this.cookieService.deleteAll();  // Clear all cookies
    this.router.navigate(['/login']);  // Redirect to login
  }

  setAuthenticated(status: boolean): void {
    this.loggedIn = status;
  }

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl + '/authenticated', { withCredentials: true });
  }
}
