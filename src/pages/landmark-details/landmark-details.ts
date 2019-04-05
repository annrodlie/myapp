import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Chinlandmarks } from './../../models/chinese/chinlandmarks.model';
import { SavedPagesINT } from './../../models/saved/savedPages.model';

import { ChinlandmarksService } from '../../services/chinese-services/chinlandmarks.service';
import { SavedpagesService } from '../../services/saved-services/savedpages.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-landmark-details',
  templateUrl: 'landmark-details.html',
})
export class LandmarkDetailsPage {

  //chinlandmark: Chinlandmarks;
  imgSource;
  img;

  chinlandmark: SavedPagesINT;

  //  //creation of new Item
  // //based on Item Interface in Models Folder
  // chinlandmark: SavedPagesINT = {
  //   landmarkName: '',
  //   landmarkDescr: '',
  //   landmarkAdd: '',
  //   landmarkTime: '',
  //   landmarkTag: '',   
  //   landmarkImg: ''
  // };

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinlandmarksService: ChinlandmarksService,
    private savedpagesService: SavedpagesService, private toast: ToastService) {
    
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad LandmarkDetailsPage');
    console.log(this.navParams.get('chinlandmark'));
    this.chinlandmark = this.navParams.get('chinlandmark'); //geting item details from params
    // this.imgSource = this.navParams.get('chinlandmark.landmarkImg');
    // this.getImgURL();    
  }

  // getImgURL() {
  //   firebase.storage().ref().child('images/' + this.imgSource+ '.jpg')
  //   .getDownloadURL().then((url) => {
  //     this.img = url;
  //   })
  // }

  // saveLandmark(chinlandmark: Chinlandmarks) {
  //   this.chinlandmarksService.saveLandmark(chinlandmark).then(() => { //when completed..
  //     // console.log(ref);
  //     this.toast.show(`${chinlandmark.landmarkName} saved!`); //add notification at the bottom of screen
  //     // this.navCtrl.setRoot(ShoppingHomePage); //go back to prev page after add
  //   });
  // }

//add data to database by calling addItem() method from .service.ts
  saveLandmark(chinlandmark: SavedPagesINT){
    this.savedpagesService.saveLandmark(chinlandmark).then(ref => {
      this.toast.show(`${chinlandmark.landmarkName} added!`); //add notification at the bottom of screen
      // this.navCtrl.push(ShoppingHomePage, {key:ref.key}); //go back to prev page after add
      console.log(ref.key);
    });
  }

}
