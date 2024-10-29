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


  getPlayers(): Observable<Player[]> {
    console.log("getPlayers");
    return this.httpClient.get<Player[]>(this.baseUrl + "/player");
  }

  getPlayer(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/player/${id}`);
  }

  createPlayer(player: Player): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/player`, player);
  }

  updatePlayer(player: Player): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/player/`, player);
  }

  deletePlayer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/player/${id}`);
  }
}