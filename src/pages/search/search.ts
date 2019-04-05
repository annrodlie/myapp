import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { ChinlandmarksService } from '../../services/chinese-services/chinlandmarks.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators'
import { Item } from '../../models/item/item.model';
import { Subject } from 'rxjs/Subject'

import firebase from 'firebase'

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage{

  chinlandmarksRef$: Observable<any[]>; //an observable list of items
  chinland;
  item;
  startAt = new Subject();
  endAt = new Subject();
  public chinlandmarkArr: Array<any>;
  public loadedChinlandmarkArr: Array<any>;
  public chinlandmarksRef: firebase.database.Reference;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chinlandmarksService: ChinlandmarksService,  private database: AngularFireDatabase) {
    // this.chinlandmarksRef$ = this.database.list('chinlandmarksTable').valueChanges();
    this.chinlandmarksRef = firebase.database().ref('/chinlandmarksTable');
  
    this.chinlandmarksRef.orderByChild("landmarkName").on('value', chinlandmarkArr => {
      let chinlandmarks = [];
      chinlandmarkArr.forEach( chinlandmark => {
        chinlandmarks.push(chinlandmark.val());
        return false;
      });

      this.chinlandmarkArr = chinlandmarks;
      this.loadedChinlandmarkArr = chinlandmarks;
    })
  }

  initializeItems(): void {
    this.chinlandmarkArr = this.loadedChinlandmarkArr;
  }

  search(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.chinlandmarkArr = this.chinlandmarkArr.filter((v) => {
      if(v.landmarkName && q) {
        if (v.landmarkName.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
    console.log(q, this.chinlandmarkArr.length);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  // search($event){
  //   console.log($event.target.value); 
  //   let term = (<HTMLInputElement>$event.target).value;
  //   this.chinland = this.chinlandmarksRef$
  //   .pipe(map(res=> res.filter(guest => guest.landmarkName.toLowerCase().includes(term.toLowerCase()))))
  // }

  // ngOnInit() {
  //   this.shopping.getShoppingListSearch(this.startAt, this.endAt)
  //       .valueChanges()
  //       .subscribe(item => this.item = item)
  // }

  // getItems($event) {
  //     let q = $event.target.value
  //     this.startAt.next(q)
  //     this.endAt.next(q+"\uf8ff")
  // }

}
