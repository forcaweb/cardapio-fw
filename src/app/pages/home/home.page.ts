import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import SwiperCore, { Autoplay, Keyboard, Pagination } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Keyboard]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
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
    this.platform.backButton.subscribeWithPriority(66, () => {
      if (!this.routerOutlets.canGoBack()) {
        App.exitApp();
      }
    });
  }

  // ionViewWillLeave(){
  //   this.SwiperCore.stopAutoplay();
  // }

  // ionViewDidEnter() {
  //   this.SwiperCore.startAutoplay();
  // }

}
