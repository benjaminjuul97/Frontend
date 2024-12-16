import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CountryService } from '../../services/country.service';
import { RouterModule } from '@angular/router';

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

  constructor(private countryService: CountryService, private router: RouterModule) {}

  cname: FormControl = new FormControl('', [Validators.required]);
  flag: FormControl = new FormControl('', [Validators.required]);

  countryFormGroup: FormGroup = new FormGroup({
    cname: this.cname.value,
    flag: this.flag.value
  });

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
  }

}
