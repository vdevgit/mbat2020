import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
    auth.loggedInObservable.subscribe(value => {
      this.loggedIn = value;
      if (!this.loggedIn) {
        this.pathName = '/register';
        this.queryParm = 'buyTicket';
      }
    });
   }

  loggedIn: boolean;
  pathName: String;
  queryParm: String;

  ngOnInit(): void {
    this.loggedIn  = this.loggedIn || !!localStorage.getItem('idToken');
    if (!this.loggedIn) {
      this.pathName = '/register';
      this.queryParm = 'buyTicket';
    };
  }
}
