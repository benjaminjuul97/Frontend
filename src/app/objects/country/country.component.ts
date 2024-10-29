import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Country } from '../../model/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountryComponent {

  constructor(private countryService: CountryService) { }

  @Input() country!: Country;

  deleteCountry(country: Country): void {
    this.countryService.deleteCountry(this.country.id).subscribe();
  }

}
