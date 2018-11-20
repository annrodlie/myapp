import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinesehomePage');
  }

  //to hide tabs bar at the bottom of application DURING intro slides
  //https://stackoverflow.com/questions/44568816/hide-ionic-tabbar-on-specific-subpages-ionic-3
  ngAfterViewInit() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'none';
        });
    }
  }
  //to show tabs bar again at the bottom of application AFTER intro slides
  //https://stackoverflow.com/questions/44568816/hide-ionic-tabbar-on-specific-subpages-ionic-3
  ionViewWillLeave() {
    let tabs = document.querySelectorAll('.show-tabbar');
    if (tabs !== null) {
        Object.keys(tabs).map((key) => {
            tabs[key].style.display = 'flex';
        });

    }
  }

}
