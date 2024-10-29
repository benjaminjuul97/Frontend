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


  getManagers(): Observable<Manager[]> {
    return this.httpClient.get<Manager[]>(this.baseUrl + "/manager");
  }

  getManager(id: number): Observable<Manager> {
    return this.httpClient.get<Manager>(`${this.baseUrl}/manager/${id}`);
  }

  createManager(manager: Manager): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/manager`, manager);
  }

  updateManager(manager: Manager): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/manager/`, manager);
  }

  deleteManager(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/manager/${id}`);
  }
}