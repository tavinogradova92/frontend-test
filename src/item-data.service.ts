import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ItemDataService {

  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.url);
  }
}
