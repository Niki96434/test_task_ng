import { Component, input } from '@angular/core';
import { listItem } from './listItem.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ItemsPage {

  item = input.required<listItem>();
}
