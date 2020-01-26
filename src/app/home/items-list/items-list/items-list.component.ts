import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../../../../item-data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {

  items;

  constructor(private listOfItems: ItemDataService) { }

  ngOnInit() {
    this.listOfItems.getItems()
      .subscribe(res => this.items = res)
  }

}
