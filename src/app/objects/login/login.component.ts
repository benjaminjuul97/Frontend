import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import {MatSelectModule} from '@angular/material/select';
import { MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatSlideToggleModule,
    MatLabel,
    MatButtonModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username!: String;
  password!: String;

  authenticated = false;

  constructor(public auth: AuthService, private router: Router) {

  }
  login(){
    if(this.username != null && this.password != null) {
      this.auth.authenticate(this.username, this.password).subscribe((auth) => {
        if(auth != null) {
          // Save to the local storage
          localStorage.setItem('headerValue', auth.headerValue);
          this.authenticated = true;
          this.router.navigate(['player'])
        }
      });
    }
  }
}
