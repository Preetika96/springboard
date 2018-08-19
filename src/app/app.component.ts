import { Component, HostListener} from '@angular/core';
import { $ } from '../../node_modules/protractor';
import { SessionService } from './session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'springBoard';

  constructor(private Session:SessionService) {}

  @HostListener('window:beforeunload',['$event'])
  Clear_Session(){
    this.Session.unsetSession();
  }
}
