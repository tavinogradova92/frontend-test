import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Item } from './interfaces/item';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ItemDataService {

  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('client error:', error.error.message);
    } else {
      console.error('server error:', `${error.status},${error.error}`);
    }
    return throwError('Ooops, you have an error');
  }

  getItems() {
    return this.http.get<Item>(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }
}
