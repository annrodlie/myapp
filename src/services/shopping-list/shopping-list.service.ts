import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

import { Item } from './../../models/item/item.model';

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/zip";


@Injectable()
export class ShoppingListService{

    private shoppingListRef = this.db.list<Item>('shopping-list')

    constructor(private db: AngularFireDatabase) {}

    getShoppingList() {
        return this.shoppingListRef;
    }

    addItem(item: Item) {
        return this.shoppingListRef.push(item); //pushing 'item' into database
    }

    editItem(item: Item) {
        return this.shoppingListRef.update(item.key, item); //updating the item based on the key selected
    }

    removeItem(item: Item) {
        return this.shoppingListRef.remove(item.key);
    }

    getShoppingListSearch(start, end): AngularFireList<any> {
            return this.db.list('shopping-list', ref => ref.orderByKey().limitToLast(50)
        );
    }
}