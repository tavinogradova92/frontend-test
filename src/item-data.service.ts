import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './interfaces/item';

@Injectable({
  providedIn: 'root'
})

export class ItemDataService {

  url = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item>(this.url)
  }
}
