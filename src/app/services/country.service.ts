import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }


  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.baseUrl}/country`);
  }

  getCountry(id: number): Observable<Country> {
    return this.httpClient.get<Country>(`${this.baseUrl}/country/${id}`);
  }

  createCountry(country: Country): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/country`, country);
  }

  updateCountry(country: Country): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/country/`, country);
  }

  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/country/${id}`);
  }
}