import { Component, OnInit } from '@angular/core';
import {ListService} from "../../services/list-service";
import {List} from "../../models/list";

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  id: string;
  name: string;
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onSubmit(){
      const newList = {
        id: this.listService.generateId(),
        name: this.name
    }
    this.listService.addList(newList);
    this.clearState();
  }

  clearState(){
    this.id = null;
    this.name = null;
    this.listService.clearState();
  }
}