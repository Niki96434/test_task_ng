import { Injectable, Input, InputSignal } from "@angular/core";
import { ItemsRepository } from "./items.repository";
import { listItem } from "./listItem.interface";

@Injectable()
export class ListService {

    private repository = new ItemsRepository();

    getListItems(): listItem[] | undefined {
        return [...this.repository.getListItems()];
    }
}