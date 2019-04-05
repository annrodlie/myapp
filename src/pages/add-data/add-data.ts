import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Item} from './../../models/Item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ChinhistoryPage } from '../chinhistory/chinhistory';
import { ToastService } from '../../services/toast/toast.service';
import { ShoppingHomePage } from '../shopping-home/shopping-home';

/**
 * Generated class for the AddDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  //creation of new Item
  //based on Item Interface in Models Folder
  item: Item = {
    name: '',
    quantity: undefined,
    price: undefined
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');
  }

  //add data to database by calling addItem() method from .service.ts
  addItem(item: Item){
    this.shopping.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`); //add notification at the bottom of screen
      this.navCtrl.push(ShoppingHomePage, {key:ref.key}); //go back to prev page after add
      console.log(ref.key);
    });
  }

}
