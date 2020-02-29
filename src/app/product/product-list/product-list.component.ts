import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  ticketIframeURL: String;
  loggedIn: boolean;
  constructor() {environment: environment }

  ngOnInit(): void {
    this.loggedIn  = !!localStorage.getItem('idToken');
    this.ticketIframeURL = environment.ticketIframe;
    // $('.event-header').css('display', 'none');
    // $('.footer').css('display', 'none');
  }

}
