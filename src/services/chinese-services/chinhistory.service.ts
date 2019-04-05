import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Chinhistory } from './../../models/chinese/chinhistory.model';


@Injectable()
export class ChinhistoryService{

    private chinhistoryRef = this.db.list<Chinhistory>('chinhistoryTable')

    constructor(private db: AngularFireDatabase) {}

    getChinhistory() {
        return this.chinhistoryRef;
    }
}