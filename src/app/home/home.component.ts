import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../../item-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText;
  
  items;

  constructor(private listOfItems: ItemDataService) { }

  ngOnInit() {
    this.listOfItems.getItems()
      .subscribe(res => this.items = res)
  }
}
