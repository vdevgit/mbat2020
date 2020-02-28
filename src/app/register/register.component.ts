import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService, public router: Router) { }

  visible = false;

  email: String;
  fullName: String;
  phoneNumber: String;
  errorMessage: String;
  password: String;
  confirmPassword: String;
  selectedSchool: String;
  dropDownData: [];
  isBuyTicketFlow: Boolean;
  ngOnInit(): void {
    this.getSchools()
    this.isBuyTicketFlow = window.location.search.split('=')[1] === 'buyTicket';
  }
  OnFullName(event: any) {
    this.fullName = event.target.value;
  }
  OnEmail(event: any) {
    this.email = event.target.value;
  }
  OnPhoneNumber(event: any) {
    this.phoneNumber = event.target.value;
  }
  OnPassword(event: any) {
    this.password = event.target.value;
  }
  OnConfirmPassword(event: any) {
    this.confirmPassword = event.target.value;
  }
  onOptionsSelected(value:string) {
    console.log("the selected value is " + value);
    this.selectedSchool = value;
  }
  getSchools() {
    const headers = {
      "Content-Type": "application/json"
    }
    this.http.get<any>(environment.mbatServer + 'schools/', { headers }).subscribe(data => {
      console.log(data);
      this.dropDownData = data;
    })
  }
  validatePassword() {
    return this.confirmPassword === this.password;
  }
  validateEmail() {
   let validDomain = environment.validEmailDomain.filter(domain => this.email.indexOf(domain) !== -1);
   return !!validDomain.length;
  }
  register() {
    console.log("here in the ", this.fullName)
    const data = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      fullName: this.fullName,
      password: this.password,
      schoolId: this.selectedSchool
    };
    if (!this.validatePassword()) {
      this.errorMessage = 'Password does not match!'
      return;
    }
    if (this.validateEmail()) {
      const headers = {
        "Content-Type": "application/json"
      }
      this.errorMessage = '';
      this.visible = true;
      this.http.post<any>(environment.mbatServer + 'user/', data, { headers }).subscribe(data => {
        console.log(data);
        this.visible = false;
        if(data.error) {
          this.errorMessage = data.message;
          console.log(data.message);
        } else {
          localStorage.setItem('idToken', data.access_token);
          this.router.navigate([this.isBuyTicketFlow ? '/product-list' : '/']);
        }
      })
    } else {
      this.errorMessage = 'Invalid domain name!'
    }
  }
}
