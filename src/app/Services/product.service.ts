import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../Interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`http://localhost:3000/products`)
  }
  deleteProduct(id: any): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/products/${id}`);
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`);
  }
  addProduct(product:Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(`http://localhost:3000/products`, product)
  }
  updateProduct(product:Iproduct): Observable<Iproduct> {
    return this.http.patch<Iproduct>(`http://localhost:3000/products/${product.id}`, product);
  }
}
