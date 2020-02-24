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
  userName = 'niren here';
  constructor(public auth: AuthService, private router: Router, private cartService: CartService) {
    auth.getUserInfo();
    // auth.loggedInObservable.subscribe(value => {
    //   this.loggedIn = value;
    // });
    // auth.userInfoDetails$.subscribe(value => {
    //   console.log(value);
    //   this.userName = value.name;
    // });
    // console.log(auth.userInfoDetails$);
  }
  ngOnInit(): void {
    this.loggedIn  = this.loggedIn || !!localStorage.getItem('idToken');

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
