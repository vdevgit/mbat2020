import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { CartService } from '../cart/cart.service';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../cart/cart-item.model';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  faShoppingCart = faShoppingCart;
  onCartPage = false;
  editMode = false;
  cartCounter = 0;

  loggedIn: boolean;
  pathName: String;
  queryParm: String;
  isAdmin: boolean;

  fullName = '';
  constructor(public auth: AuthService, private router: Router, private cartService: CartService) {
    auth.getUserInfo();
    auth.loggedInObservable.subscribe(value => {
      this.loggedIn = value;
      if (!this.loggedIn) {
        this.pathName = '/register';
        this.queryParm = 'buyTicket';
      }
    });
    auth.userInfo$.subscribe(value => {
      this.fullName = value['fullName'];
      this.isAdmin = value['role'] === 'admin';
    });
  }
  ngOnInit(): void {

    this.loggedIn  = this.loggedIn || !!localStorage.getItem('idToken');
    if (!this.loggedIn) {
      this.pathName = '/register';
      this.queryParm = 'buyTicket';
    }
    let tempUser = JSON.parse(sessionStorage.getItem('user'));
        

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('edit') && !this.editMode) {
          this.editMode = true;
        } else {
          this.editMode = false;
        }
        // console.log("event", this.editMode);
        // kako da ovo ne pozivam ovako cesto?
        if (event.url.includes('cart') && !this.onCartPage) {
          this.onCartPage = true;
        } else {
          this.onCartPage = false;
        }
      }
    });

    this.cartService.cartChanged.subscribe(cartItems => {
      this.cartCounter = cartItems.reduce(
        (total, item: CartItem) => (total += item.counter),
        0
      );
    });

  }

  ngOnDestroy() {
    // this.editModeSubscription.unsubscribe();
  }

}
