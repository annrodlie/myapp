import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChinesehomePage } from '../chinesehome/chinesehome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openChinesehomePage() {
    this.navCtrl.push(ChinesehomePage);
  }

}
