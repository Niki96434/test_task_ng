import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePage } from './home/home';
import { ItemsPage } from './list/list'
import { CommonModule } from '@angular/common';
import { ListService } from './list/list.service';

@Component({
  selector: 'app-root',
  imports: [
    ItemsPage,
    HomePage,
    CommonModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'homes';

  items = new ListService().getListItems();

}
