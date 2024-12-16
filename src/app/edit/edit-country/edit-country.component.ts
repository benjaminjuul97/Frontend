import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Router, RouterModule } from '@angular/router';
import { Country } from '../../model/country';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-edit-country',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, RouterModule],
  templateUrl: './edit-country.component.html',
  styleUrl: './edit-country.component.css'
})
export class EditCountryComponent implements OnInit {

  @Input() id!: number;
  country!: Country;

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.countryService.getCountry(this.id).subscribe(country => {
      this.country = country;
    });
  }

  updateCountry() {
    this.countryService.updateCountry(this.country!).subscribe();
    this.router.navigate(['country']);
  }

}