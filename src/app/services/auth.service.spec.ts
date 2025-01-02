import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(AuthService);
  });

  it('should return header', (done) => {
    service.authenticate('john.doe', 'VerySecret!').subscribe(login => {
      expect(login.headerValue).toBe('Basic am9obi5kb2U6VmVyeVNlY3JldCE=')
      done();
    });
  });

  it('should NOT return header', (done) => {
    service.authenticate('wrong', 'password').subscribe({
      error: (err) => {
        expect(err).toBeTruthy();
        done();
      }
    });
  })
});
