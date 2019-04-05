import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Item} from './../../models/Item/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ChinhistoryPage } from '../chinhistory/chinhistory';
import { ToastService } from '../../services/toast/toast.service';
import { ShoppingHomePage } from '../shopping-home/shopping-home';


@IonicPage()
@Component({
  selector: 'page-update-data',
  templateUrl: 'update-data.html',
})
export class UpdateDataPage {

  item: Item;
  // item: Item = {
  //   key: '',
  //   name: '',
  //   quantity: undefined,
  //   price: undefined
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams,  private shopping: ShoppingListService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    // console.log('ionViewDidLoad UpdateDataPage');
    this.item = this.navParams.get('item'); //getting item details from console
    console.log(this.navParams.get('item'));
  }

  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => { //when completed..
      // console.log(ref);
      this.toast.show(`${item.name} saved!`); //add notification at the bottom of screen
      this.navCtrl.setRoot(ShoppingHomePage); //go back to prev page after add
    });
  }

  removeItem(item: Item){
    this.shopping.removeItem(item).then(ref => {
      this.toast.show(`${item.name} deleted!`); //add notification at the bottom of screen
      this.navCtrl.setRoot(ShoppingHomePage); //go back to prev page after add
    })
  }

}
