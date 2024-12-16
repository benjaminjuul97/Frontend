import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stadium } from '../model/stadium';


@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }

  getStadiums(): Observable<Stadium[]> {
    console.log("getStadiums");
    return this.httpClient.get<Stadium[]>(this.baseUrl + "/stadium", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getStadium(id: number): Observable<Stadium> {
    return this.httpClient.get<Stadium>(`${this.baseUrl}/stadium/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createStadium(stadium: Stadium): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/stadium`, stadium, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateStadium(stadium: Stadium): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/stadium/`, stadium, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteStadium(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/stadium/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}