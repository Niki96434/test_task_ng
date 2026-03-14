import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component'
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  imports: [
    ItemComponent,
    HomeComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
    ListComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  public pages = routes;

}
