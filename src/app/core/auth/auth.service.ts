import { Injectable } from '@angular/core';
// import { Environment } from '../environment/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = Environment.apiUrl;
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://api.shibidi.war/login', { username, password }, { withCredentials: true }).pipe(
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
    return this.http.get<boolean>('https://api.shibidi.war' + '/authenticated', { withCredentials: true });
  }
}
