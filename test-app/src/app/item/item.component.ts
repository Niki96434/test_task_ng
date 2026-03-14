import { Component, input } from '@angular/core';
import { Item } from './item.interface';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class ItemComponent {

  item = input.required<Item>();
}
