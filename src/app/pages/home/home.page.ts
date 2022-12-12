import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BackButtonExitService } from 'src/app/services/back-button-exit.service';
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
    private navCtrl: NavController,
    private backButtonService: BackButtonExitService
  ) {
    this.backButtonService.init();
  }

  ngOnInit() {
  }

  pageContact(){
    console.log("oi")
    this.navCtrl.navigateForward('/contact');
    return;
  }

  // ionViewWillLeave(){
  //   this.SwiperCore.stopAutoplay();
  // }

  // ionViewDidEnter() {
  //   this.SwiperCore.startAutoplay();
  // }

}
