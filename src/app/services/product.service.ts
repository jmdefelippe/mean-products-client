import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  url = 'http://localhost:4000/api/products';

  constructor(private http: HttpClient) { }

  private getOptions(): any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:  `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
      })
    };
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url, this.getOptions());
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id, this.getOptions());
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product, this.getOptions());
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id, this.getOptions());
  }

  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product, this.getOptions());
  }
}
