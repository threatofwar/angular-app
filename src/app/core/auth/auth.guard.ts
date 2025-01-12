import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // return authService.isAuthenticated().pipe(
  //   map(authenticated => {
  //     if (authenticated) {
  //       return true;
  //     } else {
  //       router.navigate(['/login']);
  //       return false;
  //     }
  //   })
  // );
  return authService.isAuthenticated().pipe(
    map(authenticated => {
      // If user is authenticated and tries to go to Home route, redirect to Dashboard
      if (authenticated && route.routeConfig?.path === '') {
        router.navigate(['/dashboard']);
        return false; // Block access to the Home route
      }

      // If user is not authenticated and tries to go to Dashboard, redirect to Login
      if (!authenticated && route.routeConfig?.path === 'dashboard') {
        router.navigate(['/login']);
        return false; // Block access to the Dashboard route
      }

      // Allow access to the Home route for unauthenticated users
      return true;
    })
  );
};