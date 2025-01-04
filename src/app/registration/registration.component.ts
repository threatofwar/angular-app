import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
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
    this.http.post('https://api.shibidi.war/register', postData)
      .subscribe(
        (response) => {
          console.log('Response:', response);  // Handle success
          alert('Registration successful!');
        },
        (error) => {
          console.error('Error:', error);  // Handle error
          alert('Registration failed. Please try again.');
        }
      );
  }
}
