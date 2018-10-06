import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule  } from '@ionic/storage';


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
    ChinesehomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    ChinesehomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
