import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

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
