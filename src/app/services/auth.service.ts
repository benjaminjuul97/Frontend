import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://localhost:5173/api";

  constructor(private http: HttpClient) {

   }

   authenticate(username: String, password: String): Observable<Login> {
    return this.http.post<Login>(`${this.baseUrl}/login`, {
      username: username,
      password: password
    });
   }
   
  //  beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [provideHttpClient()]
  //   });
  //   service = TestBed.inject(AuthService);
  //  });

  //  it('should return header', (done) => {
  //   service.authenticate('john doe', 'VerySecret').subscribe(login => {
  //     expect(login.headerValue).toBe('Basic am9obi5kb2U6VmVyeVNl3JldCE=')
  //     done();
  //   });
  //  })

  //  it('should NOT return header', (done) => {
  //   service.authenticate('wrong', 'password').subscribe({
  //     error: (err) => {
  //       expect(err).toBeTruthy()
  //       done();
  //     }
  //  });
  // })
}
