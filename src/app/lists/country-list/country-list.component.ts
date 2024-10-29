import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryComponent } from '../../objects/country/country.component';
import { Country } from '../../model/country';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CountryComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountryListComponent implements OnInit {

  constructor(private countryService: CountryService) { }

  countries: Country[] = [];

  ngOnInit(): void {
    this.countryService.getCountries().subscribe(listOfCountries => {
      this.countries = listOfCountries;
    });
  }

}
