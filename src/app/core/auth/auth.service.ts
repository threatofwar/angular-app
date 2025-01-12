import { Injectable } from '@angular/core';
// import { Environment } from '../environment/environment';
import { Observable, throwError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = Environment.apiUrl;
  // private loggedIn = false;

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post('https://api.shibidi.war/login', { username, password }, { withCredentials: true }).pipe(
      tap(response => console.log('Login response:', response)),
      catchError(error => {
        return throwError(error);
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(`https://api.shibidi.war/logout`, {}, { responseType: 'json', withCredentials: true }).pipe(
      tap((response) => {
        console.log('Logout response:', response); // Logs the response from the backend
        console.log('Logged out successfully');
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        console.error('Logout failed:', error);
        return throwError(() => new Error('Logout error'));
      })
    );
  }
  
  isAuthenticated(): Observable<boolean> {
    return this.http.get<{ authenticated: boolean }>('https://api.shibidi.war/authenticated', { withCredentials: true }).pipe(
      map(response => response.authenticated),
      catchError(() => of(false)) // maybe not needed
    );
  }
}
