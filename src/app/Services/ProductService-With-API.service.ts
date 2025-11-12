import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { map } from 'rxjs/operators';

interface DummyJsonResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductWithAPIService {

  private apiUrl = `${environment.BaseURL}/products`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpclient: HttpClient) { }

  addProduct(product: Partial<IProduct>): Observable<IProduct> {
    return this.httpclient.post<IProduct>(
      `${this.apiUrl}/add`, 
      JSON.stringify(product), 
      this.httpOptions
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<DummyJsonResponse>(`${this.apiUrl}/category/furniture`)
      .pipe(map(response => response.products));
  }

  getProductById(prdID: string): Observable<IProduct> {
    return this.httpclient.get<IProduct>(`${this.apiUrl}/${prdID}`);
  }

  getProductsByCategory(categoryName: string): Observable<IProduct[]> {
    return this.httpclient.get<DummyJsonResponse>(`${this.apiUrl}/category/${categoryName}`)
      .pipe(map(response => response.products));
  }

  PerformFilter(categoryName: string): Observable<IProduct[]> {
    if (categoryName === "0" || categoryName === "all" || !categoryName) {
      return this.getAllProducts();
    }
    return this.getProductsByCategory(categoryName);
  }

  updateProduct(id: number, product: Partial<IProduct>): Observable<IProduct> {
    return this.httpclient.put<IProduct>(
      `${this.apiUrl}/${id}`, 
      JSON.stringify(product), 
      this.httpOptions
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpclient.delete(`${this.apiUrl}/${id}`);
  }

}
