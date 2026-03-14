import { Component, inject } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../item/items.service';
@Component({
  selector: 'app-list',
  imports: [
    ItemComponent,
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class ListComponent {

  private ItemsService = inject(ItemsService);
  //данные должны храниться как сигнал
  items = this.ItemsService.getListItems();
}
