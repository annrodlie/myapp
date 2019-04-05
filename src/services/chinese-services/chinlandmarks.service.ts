import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Chinlandmarks } from './../../models/chinese/chinlandmarks.model';


@Injectable()
export class ChinlandmarksService{

    private chinlandmarksRef = this.db.list<Chinlandmarks>('chinlandmarksTable')
    private chinTempleRef = this.db.list<Chinlandmarks>('chinTempleTable')
    private chinParkRef = this.db.list<Chinlandmarks>('chinParkTable')
    private chinMuseumRef = this.db.list<Chinlandmarks>('chinMuseumTable')
    private savedPages
    tag = 'placesofworship'

    constructor(private db: AngularFireDatabase) {}

    getChinlandmarks() {
        // return this.chinlandmarksRef;

        //alphabetical order
        return this.db.list<Chinlandmarks>('chinlandmarksTable', ref => ref.orderByChild('landmarkName'))

    }

    getChinlandmarksOption(landmarkTag) {
        return this.db.list<Chinlandmarks>('chinlandmarksTable', ref => ref.orderByChild('landmarkTag').equalTo(landmarkTag))
        // return this.chinlandmarksRef.orderByChild('landmarkTag').equalTo(this.tag).once("value")
        // .then(function(snapshot) {
        //   //snapshot.val() is the object
        // });
    }

    getChinTemple() {
        // return this.chinTempleRef;

        //alphabetical order
        return this.db.list<Chinlandmarks>('chinTempleTable', ref => ref.orderByChild('landmarkName'))
    }
    getChinPark() {
        // return this.chinParkRef;

        //alphabetical order
        return this.db.list<Chinlandmarks>('chinParkTable', ref => ref.orderByChild('landmarkName'))
    }
    getChinMuseum() {
        // return this.chinMuseumRef;

        //alphabetical order
        return this.db.list<Chinlandmarks>('chinMuseumTable', ref => ref.orderByChild('landmarkName')) 
    }
    


//Saving info
    saveLandmark(chinlandmark: Chinlandmarks){
        return this.chinlandmarksRef.push(chinlandmark); //pushing 'item' into database
    }

    // unsaveLandmark(chinlandmark: Chinlandmarks) {
    //     return this.chinlandmarksRef.remove(chinlandmark.key);
    // }
}