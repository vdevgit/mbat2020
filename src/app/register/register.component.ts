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
  email: String;
  fullName: String;  
  phoneNumber: String;
  password: String;
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
  register() {
    console.log("here in the ", this.fullName)
    const data = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      fullName: this.fullName,
      password: this.password,
      schoolId: this.selectedSchool
    };
    const headers = {
      "Content-Type": "application/json"
    }
    this.http.post<any>(environment.mbatServer + 'user/', data, { headers }).subscribe(data => {
      console.log(data);
      if(data.error) {
        console.log(data.message);
      } else {
        localStorage.setItem('idToken', data.access_token);
        this.router.navigate(['/checkout']);
      }
    })
  }
}
