import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddDataPage } from '../add-data/add-data';
import { UpdateDataPage } from '../update-data/update-data';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { Item } from '../../models/item/item.model';

/**
 * Generated class for the ShoppingHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shopping-home',
  templateUrl: 'shopping-home.html',
})
export class ShoppingHomePage {

  shoppingListRef$: Observable<Item[]>; //an observable list of items
  // shoppingListRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService,  private database: AngularFireDatabase) {
  // //connect to shopping-list table to retrieve its data value, CANNOT RETRIEVE KEY when using .valueChanges()
  //this.shoppingListRef$ = this.database.list('shopping-list').valueChanges();

  //connect to shopping-list table to retrieve its data value
   this.shoppingListRef$ = this.shopping
   .getShoppingList()  //returns DB LIST
     .snapshotChanges() //key and value 
     .pipe(map( changes =>{
        return changes.map (c=>(
          {
            key: c.payload.key,
            ...c.payload.val(),
          }
        ))
     }
     ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingHomePage');
  }

  //to open chinese history page
   openAddPage() {
    this.navCtrl.push(AddDataPage);
  }

  openUpdateDataPage() {
    this.navCtrl.push(UpdateDataPage);
  }

  public updateData(event,item){
    this.navCtrl.push(UpdateDataPage,{item:item});
  }


}
