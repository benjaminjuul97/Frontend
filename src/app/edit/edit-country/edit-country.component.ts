import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Router } from '@angular/router';
import { Country } from '../../model/country';

@Component({
  selector: 'app-edit-country',
  standalone: true,
  imports: [FormsModule],
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