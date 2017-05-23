import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  private alertCtrl:AlertController) {

  }

  public showAlert(){
    let myAlert = this.alertCtrl.create({
      title:"Simple Alert",
      message:"My simple alert",
      buttons:['Ok']
    });
    myAlert.present();
  }

  public showAlertWithParameter(content:string){
    let myAlert = this.alertCtrl.create({
      title:"Simple Alert",
      message:content,
      buttons:['Ok']
    });
    myAlert.present();
  }

}
