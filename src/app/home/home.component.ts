import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../../item-data.service';

import { Item } from '../../interfaces/item';
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchText;
  
  items;

  tree_items:Item;

  constructor(private listOfItems: ItemDataService) { }

  ngOnInit() {

    // npm list-to-tree used, credentials: https://www.npmjs.com/package/list-to-tree
    let LTT = require('list-to-tree');

    this.listOfItems.getItems()
      .subscribe(res => {
        for (var i in res) {
          res[i].parent_id = res[i].parent_id || 0; //replacing 'null' with 0 because of this npm requirenments
        }

        let ltt = new LTT(res, {
          key_id: 'id',
          key_parent: 'parent_id'
           });

        let tree = ltt.GetTree(); //npm method to create tree data structure from the list 
   
      // function which makes tree structure flat again in a right sequential order with depth calculation
        function traverse_tree(t,depth) {
          for (var i in t) {
            tree_items.push({  'id'    : t[i].id,
                               'title' : t[i].title,
                               'depth' : depth});

            if (t[i].child !== null ) {
                traverse_tree(t[i].child,depth+1);
              }
          }
    }
      let tree_items = [];
      traverse_tree(tree,0);
      this.items = tree_items;
     
      })
  }
}