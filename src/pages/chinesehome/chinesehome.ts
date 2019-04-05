import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChinhistoryPage } from '../chinhistory/chinhistory';
import { ChinlandmarksPage } from '../chinlandmarks/chinlandmarks';
import { ShoppingHomePage } from '../shopping-home/shopping-home';

/**
 * Generated class for the ChinesehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chinesehome',
  templateUrl: 'chinesehome.html',
})
export class ChinesehomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //to open chinese history page
  openChineseHistory() {
    this.navCtrl.push(ChinhistoryPage);
  }

  //to open chinese landmarks page
  openChineseLandmarks() {
    this.navCtrl.push(ChinlandmarksPage);
  }

  //TESTING: to open shopping page
  openShoppingHome() {
    this.navCtrl.push(ShoppingHomePage);
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinesehomePage');
  }

  // //to hide tabs bar at the bottom of application
  // //taken from https://stackoverflow.com/questions/44568816/hide-ionic-tabbar-on-specific-subpages-ionic-3
  // ngAfterViewInit() {
  //   let tabs = document.querySelectorAll('.show-tabbar');
  //   if (tabs !== null) {
  //       Object.keys(tabs).map((key) => {
  //           tabs[key].style.display = 'none';
  //       });
  //   }
  // }

  // //to show tabs bar again at the bottom of application AFTER intro slides
  // //taken from https://stackoverflow.com/questions/44568816/hide-ionic-tabbar-on-specific-subpages-ionic-3
  // ionViewWillLeave() {
  //   let tabs = document.querySelectorAll('.show-tabbar');
  //   if (tabs !== null) {
  //       Object.keys(tabs).map((key) => {
  //           tabs[key].style.display = 'flex';
  //       });

  //   }
  // }

}
