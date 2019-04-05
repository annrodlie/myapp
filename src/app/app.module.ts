import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//PAGES
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapsPage} from '../pages/maps/maps';
import { SettingsPage } from '../pages/settings/settings';
import { SavedPage } from '../pages/saved/saved';
import { SearchPage } from '../pages/search/search';
import { ChinesehomePage } from '../pages/chinesehome/chinesehome';
import { AppintroPage } from '../pages/appintro/appintro';
import { ChinhistoryPage } from '../pages/chinhistory/chinhistory';
import { ChinlandmarksPage } from '../pages/chinlandmarks/chinlandmarks';
import { AddDataPage } from '../pages/add-data/add-data';
import { UpdateDataPage } from '../pages/update-data/update-data';
import { ShoppingHomePage } from '../pages/shopping-home/shopping-home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule  } from '@ionic/storage';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase.credentials';
import {AngularFireDatabaseModule} from 'angularfire2/database';

//Services
import { ShoppingListService } from '../services/shopping-list/shopping-list.service';
import { ToastService } from '../services/toast/toast.service';
import { ChinhistoryService } from '../services/chinese-services/chinhistory.service';
import { ChinlandmarksService } from '../services/chinese-services/chinlandmarks.service';
import { SavedpagesService } from '../services/saved-services/savedpages.service';


@NgModule({
  declarations: [
    MyApp,
    AppintroPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapsPage,
    SettingsPage,
    SavedPage,
    SearchPage,
    ChinesehomePage,
    ChinhistoryPage,
    ChinlandmarksPage,
    ShoppingHomePage,
    AddDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AppintroPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MapsPage,
    SettingsPage,
    SavedPage,
    SearchPage,
    ChinesehomePage,
    ChinhistoryPage,
    ChinlandmarksPage,
    ShoppingHomePage,
    AddDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    ChinhistoryService,
    ChinlandmarksService,
    ToastService,
    SavedpagesService
  ]
})
export class AppModule {}
