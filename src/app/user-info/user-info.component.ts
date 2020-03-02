import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  profile = {
    fullName: '',
    email: '',
    phoneNumber: '',
    schoolName: ''
  };
  orders = {};
  constructor(public router: Router, public auth: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.auth.userLoggedIn()) {
      let tempUser = JSON.parse(sessionStorage.getItem('user'));
      this.profile = {
        fullName: tempUser['fullName'],
        email: tempUser['email'],
        phoneNumber: tempUser['phoneNumber'],
        schoolName: tempUser['schoolName']
      };
      this.getOrderDetails();
    }
  }
  getOrderDetails() {
    const headers = {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem('idToken')
    };
    this.http.get<any>(environment.mbatServer + 'orders/', { headers }).subscribe(data => {
      this.orders = data;
      console.log(data);
    })
  }

}
