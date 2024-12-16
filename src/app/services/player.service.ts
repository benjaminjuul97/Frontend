import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../model/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }


  getPlayers(): Observable<Player[]> {
    console.log("getPlayers");
    return this.httpClient.get<Player[]>(this.baseUrl + "/player", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getPlayer(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/player/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createPlayer(player: Player): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/player`, player, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updatePlayer(player: Player): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/player/`, player, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deletePlayer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/player/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

}