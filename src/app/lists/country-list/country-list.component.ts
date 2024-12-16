import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryComponent } from '../../objects/country/country.component';
import { Country } from '../../model/country';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    CountryComponent,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  pagedCountries: Country[] = []; // Specify type as Player[]
  pageSize = 4; // Default page size
  currentPage = 0; // Current page index

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    if(this.countryService.authHeader == null){
      this.router.navigate(["login"]);
      return;
    }
    this.countryService.getCountries().subscribe(listOfCountries => {
      this.countries = listOfCountries;
      console.log("countries", this.countries);
      this.updatePagedCountries();
    });
  }

  updatePagedCountries(): void {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.pagedCountries = this.countries.slice(start, end);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePagedCountries();
  }

  trackByIndex(index: number): number {
    return index;
  }

}
