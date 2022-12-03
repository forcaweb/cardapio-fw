import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

  ) {

  }

  ngOnInit() {
  }

  // ionViewWillLeave(){
  //   this.SwiperCore.stopAutoplay();
  // }

  // ionViewDidEnter() {
  //   this.SwiperCore.startAutoplay();
  // }

}
