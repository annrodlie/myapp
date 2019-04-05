import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Chinlandmarks } from './../../models/chinese/chinlandmarks.model';
import { SavedPagesINT } from './../../models/saved/savedPages.model';


@Injectable()
export class SavedpagesService{

    private savedPagesRef = this.db.list<SavedPagesINT>('savedPagesTable')

    constructor(private db: AngularFireDatabase) {}

//get saved pages
    getSavedPages() {
        // return this.chinlandmarksRef;

        //alphabetical order
        return this.db.list<SavedPagesINT>('savedPagesTable', ref => ref.orderByChild('landmarkName'))
    }    


//Saving info
    saveLandmark(chinlandmark: SavedPagesINT){
        return this.savedPagesRef.push(chinlandmark); //pushing 'item' into database
    }

    unsaveLandmark(savedPages: SavedPagesINT) {
        return this.savedPagesRef.remove(savedPages.key);
    }
}