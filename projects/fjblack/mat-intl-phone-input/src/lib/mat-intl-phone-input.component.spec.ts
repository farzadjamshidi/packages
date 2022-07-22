import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIntlPhoneInputComponent } from './mat-intl-phone-input.component';

describe('MatIntlPhoneInputComponent', () => {
  let component: MatIntlPhoneInputComponent;
  let fixture: ComponentFixture<MatIntlPhoneInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatIntlPhoneInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatIntlPhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
