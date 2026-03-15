import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class HomeComponent {
  public pages = routes.filter((page) => page.path !== '');
}
