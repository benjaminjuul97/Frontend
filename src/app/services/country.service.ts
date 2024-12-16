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

  get authHeader(): string { return localStorage["headerValue"]; }


  getCountries(): Observable<Country[]> {
    console.log("getCountries");
    return this.httpClient.get<Country[]>(this.baseUrl + "/country", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getCountry(id: number): Observable<Country> {
    return this.httpClient.get<Country>(`${this.baseUrl}/country/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createCountry(country: Country): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/country`, country, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateCountry(country: Country): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/country/`, country, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteCountry(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/country/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}