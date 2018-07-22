import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import {ListService} from './services/list-service';
import { AddItemComponent } from './components/add-item/add-item.component';
import {FormsModule} from "@angular/forms";
import { AddListComponent } from './components/add-list/add-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddItemComponent,
    AddListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
