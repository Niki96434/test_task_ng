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

  static totalValue = 0;

  updateCheckboxCount(checked: boolean, value: number) {
    if (checked) {
      ItemComponent.totalCount++;
      ItemComponent.totalValue += +value;
    } else if (!checked) {
      ItemComponent.totalCount--;
      ItemComponent.totalValue -= +value;
    }
    this.service.updateCounter(ItemComponent.totalCount, ItemComponent.totalValue)
  }

}
