import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MapsPage } from '../maps/maps';
import { SettingsPage } from '../settings/settings';
import { SavedPage } from '../saved/saved';
import { SearchPage } from '../search/search';
import { AppintroPage } from '../appintro/appintro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapsPage;
  tab3Root = SavedPage;
  tab4Root = SearchPage;
  tab5Root = SettingsPage;

  constructor() {
  }
  
}
