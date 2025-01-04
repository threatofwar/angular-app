import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../../environments/environment';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  private appUrl = ENV.appBaseUrl;
  private apiUrl = ENV.apiBaseUrl;
  verificationLink: string = '';
  verificationToken: string = '';

  profileForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  handleSubmit() {
    // alert(this.profileForm.value.username + ' | ' + this.profileForm.value.email + ' | ' + this.profileForm.value.password);
    const formData = this.profileForm.value;

    const postData = {
      username: formData.username,
      password: formData.password,
      emails: [formData.email]
    };
    // Send POST request to backend API
    this.http.post(this.apiUrl +'/register', postData)
      .subscribe(
        (response: any) => {
          this.verificationToken = response.verification_token;
          this.verificationLink = this.appUrl + '/verify-email?verification_token=' + this.verificationToken;
          alert(this.appUrl +'/verify-email?verification_token=' + response.verification_token);
        },
        (error) => {
          console.error('Error:', error);  // Handle error
          alert('Registration failed. Please try again.');
        }
      );
  }
}
