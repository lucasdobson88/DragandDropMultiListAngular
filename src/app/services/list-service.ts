import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of'

import {Item} from '../models/item';
import {List} from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  items: Item[];
  lists: List[];
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.items = [];
    this.lists = [];
   }


   // functions for items
   initEmptyArrayOfItems(): Observable<Item[]>{
      return of(this.items);
   }

   // generates all the items to show to the user, allowing components to observe the array: items
  generateItems(): Observable<Item[]>{
    this.items = [];
    for(var i = 0; i < 1000; i++){
      let item: Item = {
        id: this.generateId(),
        name: "list item " + (i + 1)
      }
      this.items.push(item);
    }
    return of(this.items);
  }

  // generates a random id. Used so when users create new items, there is no need to track the ids
  generateId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }


  addItem(item: Item) {
    this.items.push(item);
  }

  removeItem(item: Item) {
    this.items.forEach((cur, index) => {
      if(item.id === cur.id){
        this.items.splice(index, 1);
      }
   });
  }

  clearState(){
    this.stateSource.next(true);
 }

 // functions for lists
  initEmptyArrayOfLists(): Observable<List[]>{
    return of(this.lists);
 }

 addList(list: List){
    this.lists.push(list);
 }

 removeList(list: List){
  this.lists.forEach((cur, index) => {
    if(list.id === cur.id){
      this.lists.splice(index, 1);
    }
 });
 }
}
