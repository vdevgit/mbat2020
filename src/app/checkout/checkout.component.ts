import { Component, AfterViewChecked } from '@angular/core';
import { AuthService } from '../auth.service';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { tap } from 'rxjs/operators';

declare let paypal: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements AfterViewChecked {

  addScript = false;
  paypalLoad = true;
  finalAmount = 1;
  data = 'thir';


  constructor(public auth: AuthService) {
    auth.userProfile$.subscribe(value => {
      console.log(value)
    });
    console.log(auth.userProfile$)
  }

  // ngOnInit(): void {
  // }

// <input type="number" [(ngModel)]="finalAmount">
// <div id="paypal-checkout-btn"></div>



paypalConfig =  {

  // Configure environment
  env: 'sandbox',
  client: {
      sandbox : 'AZ76jPH8g4tSxbL7ZXMpXMQ3Ib7NytELW2Ac2wiayq7xFvTYL479epmdfsOCoFHPuuSMLka-DE2TzMVp',
      production: '<your-production-key here>'
        },
  // Customize button (optional)
    locale: 'en_US',
    style: {
      size: 'responsive',
      color: 'gold',
      shape: 'pill',
      Label: 'buynow',
      tagline: false
    },
  // Enable Pay Now checkout flow (optional)
  commit: true,

  payment: (data, actions) => {
    return actions.payment.create({
    payment: {
    transactions: [
        { amount: {total: '0.01', currency: 'EUR' }}
        ]
      }
    });
    },
    // Execute the payment
    onAuthorize: (data, action) => {
      return action.payment.execute().then((payment) => {
        // do something when payment is successful
        window.alert('Thank you for your MBAT2020 Ticket purchase!');
      });
      }
    };

  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-pay-btn');
        this.paypalLoad = false;
      });
      }
    }

  addPaypalScript() {
      this.addScript = true;
      return new Promise((resolve, reject) => {
      const scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    });
  }

}
