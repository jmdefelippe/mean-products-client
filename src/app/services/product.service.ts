import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // ver variables de entorno: API = https://mean-products-server.herokuapp.com
  // url = 'https://mean-products-server.herokuapp.com/api/products/';
  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    // console.log(localStorage.getItem("ACCESS_TOKEN"));

    // this.http.get(this.url,{
    //   headers: {'Authorization':`Bearer ${localStorage.getItem("ACCESS_TOKEN")}`}
    // });
    
    let headers = new HttpHeaders();
    headers = headers.set('Authorization',  `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`);

    console.log(headers);


    // const options = new RequestOptions({
    //   headers: header,
    // });
    // return this._http.get(this.ApiURL + "api/Subscriptions/IsClientCreditCardExits/" + companyId + "/", options);    


    
    // this.http.get(this.url, { headers });
    
    // return fetch(this.url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    //   }
    // });

    // return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  getProduct(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product);
  }
}
