import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ENV } from '../../environments/environment';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
  isPending = false;
  isSuccess = false;
  isFailure = false;
  verificationToken: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['verification_token'];

      if (token) {
        this.isPending = true;
        this.isSuccess = false;
        this.isFailure = false;
        this.verifyEmail(token);
      } else {
        this.isPending = false;
        this.isSuccess = false;
        this.isFailure = false;
      }
    });
  }

  verifyEmail(token: string): void {
    this.http.post<{ verification_token: string }>(`${ENV.apiBaseUrl}/verify-email`, { verification_token: token })
      .subscribe(
        response => {
          this.isPending = false;
          this.isSuccess = true;
          this.isFailure = false;
          this.verificationToken = response.verification_token;
        },
        error => {
          this.isPending = false;
          this.isSuccess = false;
          this.isFailure = true;
        }
      );
  }
}
