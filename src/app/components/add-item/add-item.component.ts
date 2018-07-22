import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list-service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  id: string;
  name: string;
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onSubmit(){
    // create the new item
      const newItem = {
        id: this.listService.generateId(),
        name: this.name
    }
    //add item to the array living on the service
    this.listService.addItem(newItem);
    this.clearState();
  }

  clearState(){
    this.id = null;
    this.name = null;
    this.listService.clearState();
  }
}
