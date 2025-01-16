import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RegistrationService } from '../core/registration/registration.service';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  
  profileForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    re_password: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  usernameAvailable: boolean | null = null;
  usernameCheckInProgress: boolean = false;

  constructor(private http: HttpClient, private router: Router, private registrationService: RegistrationService, private authService: AuthService) {
    this.profileForm.get('username')?.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((username): username is string => username !== null),
        switchMap((username) => this.registrationService.checkUsernameAvailability(username))
      )
      .subscribe((response) => {
        this.usernameAvailable = response.available;
        this.usernameCheckInProgress = false;
      });
  }

  handleSubmit() {
    const formData = this.profileForm.value;

    const postData = {
      username: formData.username,
      password: formData.password,
      re_password: formData.re_password,
      emails: [formData.email]
    };

    this.registrationService.registerUser(postData).subscribe(
      (response) => {
        console.log('User registered successfully:', response);

        const username = postData.username || '';
        const password = postData.password || '';

        this.authService.login(username, password).subscribe(
          (loginResponse) => {
            console.log('Login successful:', loginResponse);
            this.router.navigate(['/dashboard']);  // Redirect to the dashboard page
          },
          (error) => {
            console.error('Login failed after registration:', error);
          }
        );
      },
      (error) => {
        console.error('Error during registration:', error);
      }
    );
  }
  handleCancel() {
    this.router.navigate(['']);
  }
}
