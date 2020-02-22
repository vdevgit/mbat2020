import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService) { }
  email: String;
  fullName: String;  
  phoneNumber: String;
  password: String;
  ngOnInit(): void {
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
  register() {
    console.log("here in the ", this.fullName)
    const data = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      fullName: this.fullName,
      password: this.password,
      username: "niren",
      schoolId: "qw12"
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem('idToken')
    }
    this.http.post<any>('http://localhost:8080/user/', data, { headers }).subscribe(data => {
      console.log(data);
    })
    // .pipe(
    //   catchError((error: HttpErrorResponse) => {
    //     if (error.error instanceof ErrorEvent) {
    //       // A client-side or network error occurred. Handle it accordingly.
    //       console.error('An error occurred:', error.error.message);
    //     } else {
    //       // The backend returned an unsuccessful response code.
    //       // The response body may contain clues as to what went wrong,
    //       console.error(
    //         `Backend returned code ${error.status}, ` +
    //         `body was: ${error.error}`);
    //     }
    //     // return an observable with a user-facing error message
    //     return throwError(
    //       'Something bad happened; please try again later.');
    //   }));
  }
}
