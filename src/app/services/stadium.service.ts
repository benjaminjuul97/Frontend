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


  getStadiums(): Observable<Stadium[]> {
    return this.httpClient.get<Stadium[]>(`${this.baseUrl}/stadium`);
  }

  getStadium(id: number): Observable<Stadium> {
    return this.httpClient.get<Stadium>(`${this.baseUrl}/stadium/${id}`);
  }

  createStadium(stadium: Stadium): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/stadium`, stadium);
  }

  updateStadium(stadium: Stadium): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/stadium/`, stadium);
  }

  deleteStadium(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/stadium/${id}`);
  }
}