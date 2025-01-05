import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common'
import { HttpClient } from '@angular/common/http';
import { ENV } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.scss'
})
export class PasswordResetComponent implements OnInit {
  private appUrl = ENV.appBaseUrl;
  private apiUrl = ENV.apiBaseUrl;
  passwordResetToken: string | null = null;

  passwordResetForm = new FormGroup({
    password_new: new FormControl(''),
    password_confirmation: new FormControl(''),
  });

  constructor(private http: HttpClient, private route: ActivatedRoute,) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // const token = params['token'];
      this.passwordResetToken = params['token'];
      console.log('2nd: ' , this.passwordResetToken)
    });
  }

  onSubmit(): void {
    const formData = this.passwordResetForm.value;

    const postData = {
      password_new: formData.password_new,
      password_confirmation: formData.password_confirmation,
      new_password: formData.password_confirmation,
      token: this.passwordResetToken
    };

    console.log(`New Password: ${postData.password_new}`);
    console.log(`Confirm Password: ${postData.password_confirmation}`);
    console.log();

    this.http.post(this.apiUrl +'/reset-password', postData)
    // this.http.post(`${this.apiUrl}/reset-password`, postData)
      .subscribe(
        (response: any) => {
          console.log('token:', postData)
        },
        (error) => {
          console.error('Error:', error);
        }
      );
  }
}
