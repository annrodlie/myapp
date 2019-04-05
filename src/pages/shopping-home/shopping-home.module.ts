import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingHomePage } from './shopping-home';

@NgModule({
  declarations: [
    ShoppingHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingHomePage),
  ],
})
export class ShoppingHomePageModule {}
