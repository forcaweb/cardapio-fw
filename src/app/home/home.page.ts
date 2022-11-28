import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private platform: Platform,
    private routerOutlets: IonRouterOutlet
  ) {
    this.backButtonEvent();
   }

  ngOnInit() {
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlets.canGoBack()) {
        App.exitApp();
      }
    });
  }

}
