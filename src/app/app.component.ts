import { Component, ViewChild} from '@angular/core';
import { Platform, MenuController, Nav,ActionSheetController,AlertController } from 'ionic-angular';
import {Camera} from 'ionic-native';
import { StatusBar } from 'ionic-native';
import { Dashboard } from '../pages/dashboard/dashboard';
import { MyAccount} from '../pages/my-account/my-account';
import { Invoices} from '../pages/invoices/invoices';
import { About} from '../pages/about/about';
import { Help} from '../pages/help/help';
import { LogOut} from '../pages/log-out/log-out';
import { Settings} from '../pages/settings/settings';
import {Login} from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = Login;
  pages: Array<{title: string, component: any, name_ios: string, name_md: string}>;
  profileImage: string;

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  constructor(
      public platform: Platform,
      public menu: MenuController,
      public actionSheetCtrl: ActionSheetController,
      public alertCtrl: AlertController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: Dashboard, name_ios: 'ios-home', name_md: 'md-home'},
    { title: 'My Account', component: MyAccount, name_ios: 'ios-person', name_md: 'md-person'},
    { title: 'Settings', component: Settings, name_ios: 'ios-settings', name_md: 'md-settings' },
    { title: 'Invoices', component: Invoices, name_ios: 'ios-document', name_md: 'md-document' },
    { title: 'About', component: About, name_ios: 'ios-information-circle', name_md: 'md-information-circle' },
    { title: 'Help', component: Help, name_ios: 'ios-help-circle', name_md: 'md-help-circle' },
    { title: 'Log Out', component: LogOut, name_ios: 'ios-log-out', name_md: 'md-log-out' },
  ];
    this.profileImage = 'assets/images/vik.jpg';
    /*console.log(this.profileImage);*/
  }

  openPage(page) {
    if(page.title == 'Log Out'){
      let confirm = this.alertCtrl.create({
        title: 'Are you sure?',
        message: 'Do you want to log-out?',
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Confirm',
            handler: () => {
              this.menu.close();
              this.nav.setRoot(Login);
            }
          }
        ]
      });
      confirm.present();
    }else{
      // close the menu when clicking a link from the menu
      this.menu.close();
      // navigate to the new page if it is not the current page
      this.nav.setRoot(page.component);
    }
  }

  changeProfilePhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Change Photo',
      buttons: [
        {
          text: 'Take a photo',
          role: 'takephoto',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Choose from library',
          role: 'choosephoto',
          handler: () => {
            console.log('Open Mobile Library');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();

  }
  takePicture(){
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.profileImage = "data:image/jpeg;base64," + imageData;
      /*update user photo in db and upload also*/
    }, (err) => {
      console.log(err);
    });
  }
}
