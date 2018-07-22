import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list-service";
import {Item} from "../../models/item";
import {List} from "../../models/list";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Item[];
  selectedItems: Item[];
  selectedItemStyle: any[] = [];
  itemFormOpen: boolean = false;

  lists: List[];
  selectedLists: List[];
  selectedListStyle: any[] = [];
  listFormOpen: boolean = false;
  constructor(private listService: ListService) { }

  ngOnInit() {
    //initialise the arrays that are used.
    this.selectedItems = [];
    this.listService.initEmptyArrayOfItems().subscribe(items => {
      this.items = items;
    });

    this.selectedLists = [];
    this.listService.initEmptyArrayOfLists().subscribe(lists => {
      this.lists = lists;
    });
  }

  // generate all the items to show to the user
  generateItems(){
    this.listService.generateItems().subscribe(items => {
      this.items = items;
    });
  }

  toggleItemSelect(item: Item){
    let isFound = false;
    //Check if item exists in selected list, if so, remove
    this.selectedItems.forEach((cur, index) => {
      if(item.id === cur.id){
        this.selectedItemStyle[item.id] = false;
        this.selectedItems.splice(index, 1);
        isFound = true;
      }
   });

   if(!isFound){
      // If we get to here, Add item to selectedList
      this.selectedItemStyle[item.id] = true; 
      this.selectedItems.push(item);
   }
  }

  toggleForm(){
    this.itemFormOpen = !this.itemFormOpen;
  }

  // remove all the items that have been selected
  removeSelectedItems(){
    this.selectedItems.forEach((item) => {
      this.listService.removeItem(item);
   });

   this.selectedItems = [];
  }

  toggleListForm(){
    this.listFormOpen = !this.listFormOpen;
  }

  // removes all lists that have been selected
  removeSelectedLists(){
    this.selectedLists.forEach((list) => {
      this.listService.removeList(list);
   });

   this.selectedLists = [];
  }

  toggleListSelect(list: List){
    let isFound = false;
    //Check if list exists in selected list, if so, remove
    this.selectedLists.forEach((cur, index) => {
      if(list.id === cur.id){
        this.selectedListStyle[list.id] = false;
        this.selectedLists.splice(index, 1);
        isFound = true;
      }
   });

   if(!isFound){
      // If we get to here, Add list to selectedList
      this.selectedListStyle[list.id] = true; 
      this.selectedLists.push(list);
   }
  }
}
