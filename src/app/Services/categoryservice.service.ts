import { IProduct } from './../Models/iproduct';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.BaseURL}/categories`;

  constructor(private httpclient: HttpClient) { }

  getAllCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(this.apiUrl);
  }

  getCategoryById(id: string): Observable<ICategory> {
    return this.httpclient.get<ICategory>(`${this.apiUrl}/${id}`);
  }

}
