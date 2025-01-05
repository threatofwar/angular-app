import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enable-cookies-popup',
  imports: [CommonModule],
  templateUrl: './enable-cookies-popup.component.html',
  styleUrl: './enable-cookies-popup.component.scss'
})
export class EnableCookiesPopupComponent implements OnInit {
  visible: boolean = true;

  closePopup() {
    this.visible = false;
  }

  ngOnInit(): void {
    if (navigator.cookieEnabled) {
      this.visible = false;
    }
  }
}
