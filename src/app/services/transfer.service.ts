import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transfer } from '../model/transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  baseUrl: string = 'http://localhost:5173/api';

  constructor(private httpClient: HttpClient) { }

  get authHeader(): string { return localStorage["headerValue"]; }

  getTransfers(): Observable<Transfer[]> {
    console.log("getTransfers");
    return this.httpClient.get<Transfer[]>(this.baseUrl + "/transfer", {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  getTransfer(id: number): Observable<Transfer> {
    return this.httpClient.get<Transfer>(`${this.baseUrl}/transfer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  createTransfer(transfer: Transfer): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/transfer`, transfer, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  updateTransfer(transfer: Transfer): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/transfer/`, transfer, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }

  deleteTransfer(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/transfer/${id}`, {
      headers: {
        "Authorization": this.authHeader
      }
    });
  }
}