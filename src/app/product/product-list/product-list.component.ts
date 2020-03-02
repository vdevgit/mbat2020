import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ticketIframeURL: String;
  loggedIn: boolean;
  constructor(public auth: AuthService) {
    auth.getUserInfo();
  }

  ngOnInit(): void {
    this.auth.userLoggedIn()
    this.loggedIn  = !!localStorage.getItem('idToken');
    this.ticketIframeURL = environment.ticketIframe;
    // $('.event-header').css('display', 'none');
    // $('.footer').css('display', 'none');
  }

}
