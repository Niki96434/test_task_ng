import { Injectable, inject } from "@angular/core";
import { ItemsRepository } from "./items.repository";
import { Item } from "./item.interface";

@Injectable()
export class ItemsService {

    private repository = inject(ItemsRepository);

    getListItems(): readonly Item[] {
        return this.repository.getListItems();
    }
}

