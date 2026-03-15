import { Component, inject, input } from '@angular/core';
import { Item } from './item.interface';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class ItemComponent {

  public item = input.required<Item>();

  private service = inject(CounterService);

  static totalCount = 0;

  updateCheckboxCount(checked: boolean) {
    if (checked) {
      ItemComponent.totalCount++;
    } else if (!checked) {
      ItemComponent.totalCount--;
    }
    this.service.updateCounter(ItemComponent.totalCount)
  }

}
