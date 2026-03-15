import { Component, effect, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics-menu',
  imports: [],
  templateUrl: './analytics-menu.html',
  styleUrl: './analytics-menu.css',
})
export class AnalyticsMenu {
  public router = inject(Router);



}
