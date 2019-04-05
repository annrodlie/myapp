import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedDetailsPage } from './saved-details';

@NgModule({
  declarations: [
    SavedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedDetailsPage),
  ],
})
export class SavedDetailsPageModule {}
