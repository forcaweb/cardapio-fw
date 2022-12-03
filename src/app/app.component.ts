import { Component} from '@angular/core';
import { BackButtonExitService } from './services/back-button-exit.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private backButtonService: BackButtonExitService
  ) {
    this.backButtonService.init();
  }
}
