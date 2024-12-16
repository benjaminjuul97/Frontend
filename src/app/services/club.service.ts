import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../model/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }


  getClubs(): Observable<Club[]> {
    console.log("getClubs");
    return this.httpClient.get<Club[]>(this.baseUrl + "/club", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getClub(id: number): Observable<Club> {
    return this.httpClient.get<Club>(`${this.baseUrl}/club/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createClub(club: Club): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/club`, club, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateClub(club: Club): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/club/`, club, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteClub(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/club/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}