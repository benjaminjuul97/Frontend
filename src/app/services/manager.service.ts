import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }

  getManagers(): Observable<Manager[]> {
    console.log("getManagers");
    return this.httpClient.get<Manager[]>(this.baseUrl + "/manager", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getManager(id: number): Observable<Manager> {
    console.log("getManagers");
    return this.httpClient.get<Manager>(`${this.baseUrl}/manager/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createManager(manager: Manager): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/manager`, manager, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateManager(manager: Manager): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/manager/`, manager, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteManager(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/manager/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}