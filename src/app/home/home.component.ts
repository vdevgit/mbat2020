import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    if (window.location.search.indexOf('orderconfirmed') !== -1) {
      this.syncPaymentDBWithMbatDB();
    }
  }
  syncPaymentDBWithMbatDB() {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem('idToken')
    };
    this.http.post<any>(environment.mbatServer + 'attendee/', {}, { headers }).subscribe(data => {
      console.log(data);
    })
  }
}
