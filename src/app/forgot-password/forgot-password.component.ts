import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { ENV } from '../../environments/environment';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  private appUrl = ENV.appBaseUrl;
  private apiUrl = ENV.apiBaseUrl;
  passwordResetToken: string = '';
  passwordResetLink: string = '';

  emailForm = new FormGroup({
    email: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  onSubmit() {
    const formData = this.emailForm.value;

    const postData = {
      email: formData.email,
    };

    console.log(`Email submitted: ${postData.email}`);
    
    this.http.post(this.apiUrl +'/forgot-password', postData)
      .subscribe(
        (response: any) => {
          this.passwordResetToken = response.token;
          console.log(`token:  ${this.passwordResetToken}`)
          this.passwordResetLink = this.appUrl + '/password-reset?token=' + this.passwordResetToken;
        },
        (error) => {
          console.error('Error:', error.error.error);  // Handle error
          alert(error.error.error);
        }
      );
  }
}
