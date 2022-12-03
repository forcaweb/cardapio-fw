import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class BackButtonExitService {

  init(){
    this.platform.backButton.subscribeWithPriority(10, ()=>{
        App.exitApp();
    })
  }

  constructor(
    private platform: Platform
  ) { }
}
