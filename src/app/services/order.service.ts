import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, Tracking } from '../models/object.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // private apiUrl = 'http://localhost:3000/orders';

  // constructor(private http: HttpClient) { }

  // getAllOrders(): Observable<Tracking[]> {
  //   return this.http.get<Tracking[]>(this.apiUrl);
  // }

  // getOrderById(orderId: number): Observable<Tracking> {
  //   return this.http.get<Tracking>(`${this.apiUrl}/${orderId}`);
  // }

  // updateOrderStatus(orderId: number, updatedOrder: Tracking): Observable<void> {
  //   return this.http.put<void>(`${this.apiUrl}/${orderId}`, updatedOrder);
  // }

  // deleteOrder(orderId: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${orderId}`);
  // }
  
}

