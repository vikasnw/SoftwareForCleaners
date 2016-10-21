import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { ForgotPassword } from '../forgot-password/forgot-password';
import { Dashboard } from '../dashboard/dashboard';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  loader: any;
  user = {email: '', password:''};
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  /**
   * event fire when screen show
   */
  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  /**
   * reirect to forgot password link
   */
  forgotPassword(){
    this.navCtrl.setRoot(ForgotPassword);
  }

  /**
   * check user login credentials and redirect to app dashboard
   */
  login(){
    this.navCtrl.setRoot(Dashboard);
  }
}
