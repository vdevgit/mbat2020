import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  loggedIn: boolean;
  pathName: string;
  constructor() { }

  ngOnInit(): void {
    this.loggedIn  = this.loggedIn || !!localStorage.getItem('idToken');
    this.pathName = window.location.pathname === '/product-details' ? 'buyTicket' : '';
  }

}
