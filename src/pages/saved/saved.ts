import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

import { SavedPagesINT } from './../../models/saved/savedPages.model';
import { ChinlandmarksService } from '../../services/chinese-services/chinlandmarks.service';
import { SavedpagesService } from '../../services/saved-services/savedpages.service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html',
})
export class SavedPage {

  savedPagesRef$: Observable<SavedPagesINT[]>; //an observable list of items
  // shoppingListRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinlandmarksService: ChinlandmarksService,
    private savedpagesService: SavedpagesService, private toast: ToastService,  private database: AngularFireDatabase) {
  // //connect to shopping-list table to retrieve its data value, CANNOT RETRIEVE KEY when using .valueChanges()
  // this.shoppingListRef$ = this.database.list('shopping-list').valueChanges();

  //connect to shopping-list table to retrieve its data value
   this.savedPagesRef$ = this.savedpagesService
   .getSavedPages()  //returns DB LIST
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
    console.log('ionViewDidLoad SavedPage');
  }

}
