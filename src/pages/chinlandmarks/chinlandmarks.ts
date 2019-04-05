import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'

import { ChinlandmarksService } from '../../services/chinese-services/chinlandmarks.service';
import { Chinlandmarks } from './../../models/chinese/chinlandmarks.model';

/**
 * Generated class for the ChinlandmarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chinlandmarks',
  templateUrl: 'chinlandmarks.html',
})
export class ChinlandmarksPage {

  //  chinlandmarksRef$: any[];
  // chinlandmarksRef$: Observable<Chinlandmarks[]>; //an observable list of items
  chinlandmarksRef$: Observable<any[]>;
  chinTempleRef$: Observable<any[]>;
  chinParkRef$: Observable<any[]>;
  chinMuseumRef$: Observable<any[]>;

  clRef$: any[]; //an observable list of items

  landmarkTag;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinlandmarksService: ChinlandmarksService,  private database: AngularFireDatabase) {
    // //connect to shopping-list table to retrieve its data value, CANNOT RETRIEVE KEY when using .valueChanges()
    this.chinlandmarksRef$ = this.database.list('chinlandmarksTable').valueChanges();
    this.landmarkTag = 'all'; //preselected segemnt option to 'all'
    // this.chinlandmarksRef$ = this.database.list('chinlandmarksTable').orderByChild('landmarkTag').equalTo(this.tag).once("value")
    // .then(function(snapshot) {
    //   //snapshot.val() is the object
    // });

     //connect to chinhistory table to retrieve its data value, for editing info
     this.chinlandmarksRef$ = this.chinlandmarksService
    .getChinlandmarks()  //returns DB LIST
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
    console.log('ionViewDidLoad ChinlandmarksPage');
  }


//when option changes
  changeOption($event) {
    if ($event.value == 'placesofworship')
    {
      // this.chinlandmarksRef$ = this.database.list('chinlandmarksTable').valueChanges();
      console.log($event.value);
      // this.chinlandmarksRef$ = this.database.list('chinlandmarksTable', ref => ref.orderByChild('landmarkTag').equalTo('placesofworship')).valueChanges();
      //  this.chinTempleRef$ = this.chinlandmarksService.getChinlandmarksOption($event.value);
      // this.chinlandmarksRef$ = $event.value.pipe(
      //   map(landmarkTag => 
      //     this.database.list('/chinlandmarksTable', ref =>
      //       landmarkTag ? ref.orderByChild('landmarkTag').equalTo($event.value) : ref
      //     ).snapshotChanges()
      //   )
      // );

      // //connect to shopping-list table to retrieve its data value, CANNOT RETRIEVE KEY when using .valueChanges()
      // this.chinTempleRef$ = this.database.list('chinTempleTable').valueChanges();

      //connect to chinhistory table to retrieve its data value, for editing info
       this.chinTempleRef$ = this.chinlandmarksService
       .getChinTemple()  //returns DB LIST
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
    if (this.landmarkTag == 'museum')
    {
      // this.chinMuseumRef$ = this.database.list('chinMuseumTable').valueChanges();

    //connect to chinhistory table to retrieve its data value, for editing info
     this.chinMuseumRef$ = this.chinlandmarksService
     .getChinMuseum()  //returns DB LIST
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
    else
    {
      // this.chinParkRef$ = this.database.list('chinParkTable').valueChanges();

    //connect to chinhistory table to retrieve its data value, for editing info
     this.chinParkRef$ = this.chinlandmarksService
     .getChinPark()  //returns DB LIST
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
  }

}
