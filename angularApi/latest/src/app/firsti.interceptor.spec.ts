import { TestBed } from '@angular/core/testing';

import { FirstiInterceptor } from './firsti.interceptor';

describe('FirstiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FirstiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FirstiInterceptor = TestBed.inject(FirstiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
