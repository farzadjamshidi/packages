import { TestBed } from '@angular/core/testing';

import { MatIntlPhoneInputService } from './mat-intl-phone-input.service';

describe('MatIntlPhoneInputService', () => {
  let service: MatIntlPhoneInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatIntlPhoneInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
