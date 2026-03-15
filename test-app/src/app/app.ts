import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component'
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { ListComponent } from './list/list.component';
import { CounterService } from './counter.service';

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

  public router = inject(Router);

  public totalCounter = 0;

  protected counterService = inject(CounterService);

  onListCounterChange(value: number) {
    this.totalCounter = value;
  }

  getActiveTitle(): string {
    if (this.router.url === '/items') {
      return 'Список элементов';
    } else if (this.router.url === '/') {
      return 'Главная';
    }
    return 'Неизвестный раздел';
  }

  getMenu(): boolean {
    if (this.router.url === '/items') {
      return true
    } else {
      return false
    }
  }

}
