import { Component} from '@angular/core';
import { BackButtonExitService } from './services/back-button-exit.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/', icon: 'home' },
    { title: 'Contato', url: '/contact', icon: 'call' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private backButtonService: BackButtonExitService
  ) {
    this.backButtonService.init();
  }

  ngOnInit() {

  }
}
