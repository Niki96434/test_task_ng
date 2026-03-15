import { Injectable } from "@angular/core";
import { Item } from "./item.interface";

@Injectable()
export class ItemsRepository {

    private dataItems = [{
        id: 1,
        name: 'product1',
        value: 20,
        checked: false
    },
    {
        id: 2,
        name: 'product2',
        value: 30,
        checked: false
    },
    {
        id: 3,
        name: 'product3',
        value: 40,
        checked: false
    }];

    getListItems(): Item[] {
        return [...this.dataItems]
    }
}