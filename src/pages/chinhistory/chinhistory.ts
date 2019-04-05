import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { ChinhistoryService } from '../../services/chinese-services/chinhistory.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import { Chinhistory } from '../../models/chinese/chinhistory.model';

/**
 * Generated class for the ChinhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chinhistory',
  templateUrl: 'chinhistory.html',
})
export class ChinhistoryPage {

  // chinhistoryRef$: Observable<Chinhistory[]>; //an observable list of items
  chinhistoryRef$: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinhistory: ChinhistoryService,  private database: AngularFireDatabase) {
    //connect to shopping-list table to retrieve its data value, CANNOT RETRIEVE KEY when using .valueChanges()
    this.chinhistoryRef$ = this.database.list('chinhistoryTable').valueChanges();

    //  //connect to chinhistory table to retrieve its data value
    //  this.chinhistoryRef$ = this.chinhistory
    // .getChinhistory()  //returns DB LIST
    //  .snapshotChanges() //key and value 
    //  .pipe(map( changes =>{
    //     return changes.map (c=>(
    //       {
    //         key: c.payload.key,
    //         ...c.payload.val(),
    //       }
    //     ))
    //  }
    //  ));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChinhistoryPage');
  }

}
