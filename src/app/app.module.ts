import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

@NgModule({
  declarations: [
    MyApp,
    FIREBASE_PROVIDERS,
    defaultFirebase,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp,[FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyCKA0fwC1UVBY0ciQM2bkK7DaR90NGkHxE",
      authDomain: "cleaning-app-a0b55.firebaseapp.com",
      databaseURL: "https://cleaning-app-a0b55.firebaseio.com",
      storageBucket: "cleaning-app-a0b55.appspot.com",
    })]],
  entryComponents: [
    MyApp,
    FIREBASE_PROVIDERS,
    defaultFirebase,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: []
})
export class AppModule {}
