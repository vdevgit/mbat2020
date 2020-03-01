import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
  constructor(public router: Router, public auth: AuthService) { }

  ngOnInit(): void {
    if (this.auth.userLoggedIn()) {
      let tempUser = JSON.parse(sessionStorage.getItem('user'));
      this.profile = {
        fullName: tempUser['fullName'],
        email: tempUser['email'],
        phoneNumber: tempUser['phoneNumber'],
        schoolName: tempUser['schoolName']
      };
    }
  }

}
