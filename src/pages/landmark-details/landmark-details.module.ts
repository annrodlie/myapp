import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LandmarkDetailsPage } from './landmark-details';

@NgModule({
  declarations: [
    LandmarkDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LandmarkDetailsPage),
  ],
})
export class LandmarkDetailsPageModule {}
