import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { EnableCookiesPopupComponent } from './enable-cookies-popup/enable-cookies-popup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EnableCookiesPopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
