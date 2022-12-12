import { Injectable } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class BackButtonExitService {

  constructor(
    private platform: Platform,
    private router: Router,
    private navCtrl: NavController,
    // private alertController: AlertController
  ) { }

  init(){
    this.platform.backButton.subscribeWithPriority(10, async ()=>{
      const currentUrl = this.router.url;

      if(currentUrl === '/'){
        App.minimizeApp();
      }
      else{
        this.navCtrl.back();
      }
    })
  }
}
