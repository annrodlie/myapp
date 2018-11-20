import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChinesehomePage } from '../chinesehome/chinesehome';
import { Storage } from '@ionic/storage';
import { AppintroPage } from '../appintro/appintro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }

  openChinesehomePage() {
    this.navCtrl.push(ChinesehomePage);
  }

  //to view app intro page first before homepage if not visited yet
  ionViewDidLoad() {
    this.storage.get('appintro-done').then(done => {
      if (!done) {
        this.storage.set('appintro-done', true);
        this.navCtrl.setRoot(AppintroPage);
      }
    });
  }

}
