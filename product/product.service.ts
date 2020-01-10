import { Injectable, Inject } from '@angular/core';

import { Product} from './product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl) { }

  getProduct(): Observable<any> {
    return this.http.get(this.apiUrl + '/products').pipe(map(Response => Response));
  }
}
