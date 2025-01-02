import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CountryService } from '../../services/country.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-country',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    RouterModule],
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css'
})
export class AddCountryComponent {

  constructor(private countryService: CountryService, private router: Router) {}

  cname: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9\\s]+$')]);
  flag: FormControl = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9.-]+\\.svg$')]);

  countryFormGroup: FormGroup = new FormGroup({
    cname: this.cname.value,
    flag: this.flag.value
  });

  ngOnInit(): void {
    if(this.countryService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
  }

  addCountry(){
     if(!this.countryFormGroup.valid) {
       console.log("Data not valid");
       return;
    
     }
  
    this.countryService.createCountry({
      id: 0,
      cname: this.cname.value,
      flag: this.flag.value
    }).subscribe({
      next: () => console.log("Done"),
      error: (err) => console.error("Something went wrong: " + err)
    })
    this.router.navigate(['country']);
  }

}
