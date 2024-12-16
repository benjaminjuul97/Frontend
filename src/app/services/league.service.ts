import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { League } from '../model/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }

  getLeagues(): Observable<League[]> {
    console.log("getLeagues");
    return this.httpClient.get<League[]>(this.baseUrl + "/league", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getLeague(id: number): Observable<League> {
    return this.httpClient.get<League>(`${this.baseUrl}/league/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createLeague(league: League): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/league`, league, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateLeague(league: League): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/league/`, league, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteLeague(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/league/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}