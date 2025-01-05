import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableCookiesPopupComponent } from './enable-cookies-popup.component';

describe('EnableCookiesPopupComponent', () => {
  let component: EnableCookiesPopupComponent;
  let fixture: ComponentFixture<EnableCookiesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnableCookiesPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableCookiesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
