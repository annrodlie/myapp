import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SavedPagesINT } from './../../models/saved/savedPages.model';
import { ChinlandmarksService } from '../../services/chinese-services/chinlandmarks.service';
import { SavedpagesService } from '../../services/saved-services/savedpages.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-saved-details',
  templateUrl: 'saved-details.html',
})
export class SavedDetailsPage {

  savedPages: SavedPagesINT;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinlandmarksService: ChinlandmarksService,
    private savedpagesService: SavedpagesService, private toast: ToastService) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SavedDetailsPage');
  // }

  ionViewWillLoad() {
    // console.log('ionViewDidLoad UpdateDataPage');
    this.savedPages = this.navParams.get('savedPages'); //getting item details from console
    console.log(this.navParams.get('savedPages'));
    console.log(this.savedPages.key);
  }


  removeItem(savedPages: SavedPagesINT){
    this.savedpagesService.unsaveLandmark(savedPages).then(ref => {
      this.toast.show(`${savedPages.landmarkName} deleted!`); //add notification at the bottom of screen
      // this.navCtrl.setRoot(ShoppingHomePage); //go back to prev page after add
      console.log(savedPages.key);
    })
  }

}
