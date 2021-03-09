import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title = 'appBootstrap';
  closeResult: string;

  constructor(private http: HttpClient, public auth: AuthService, public router: Router, private modalService: NgbModal) { }

  visible = false;

  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  errorMessage: string;
  password: string;
  confirmPassword: string;
  program: string;
  selectedSchool: string;
  selectedSchool2: string;
  yearOfGraduation: string;
  linkedIn: string;
  dropDownData: [];
  otherDropDownData: [];
  isBuyTicketFlow: boolean;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  phoneNumberError: string;
  passwordError: string;
  informationConfirm: boolean;
  policyConfirm: boolean;
  schoolError: string;
  yearOfGraduationError: string;
  linkedInError: string;


  ngOnInit(): void {

    this.getSchools();
    this.isBuyTicketFlow = window.location.search.split('=')[1] === 'buyTicket';
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', backdrop: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  OnFirstName(event: any) {
    this.firstName = event.target.value;
  }
  OnLastName(event: any) {
    this.lastName = event.target.value;
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
  OnProgramChange(event: any) {
    this.program = event.target.value;
  }
  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
    this.selectedSchool = value;
  }
  onOptionsSelected2(value: string) {
    console.log('the selected value 2 is ' + value);
    this.selectedSchool2 = value;
  }
  OnGraduationYear(event: any) {
    this.yearOfGraduation = event.target.value;
  }
  OnLinkedIn(event: any) {
    this.linkedIn = event.target.value;
  }
  getSchools() {
    const headers = {
      'Content-Type': 'application/json'
    };
    this.http.get<any>(environment.mbatServer + 'schools/', { headers }).subscribe(data => {
      console.log(data);
      this.dropDownData = data;
      this.otherDropDownData = data;
    });
  }
  validatePassword() {
    return this.confirmPassword === this.password;
  }
  validateInfoConfirm(event) {
    this.informationConfirm = event.target.checked;
  }
  validatePolicyConfirm(event) {
    this.policyConfirm = event.target.checked;
  }
  validateEmail() {
   const validDomain = environment.validEmailDomain.filter(domain => this.email.indexOf(domain) !== -1);
   return !!validDomain.length;
  }
  register() {
    console.log('here in the ', this.firstName);
    let isFormValid = true;
    const data = {
      email: this.email,
      phoneNumber: this.phoneNumber,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      schoolId: this.program === '1' ? this.selectedSchool : this.selectedSchool2,
      yearOfGraduation: this.yearOfGraduation,
      linkedIn: this.linkedIn
    };
    this.errorMessage = '';
    this.firstNameError = '';
    this.lastNameError = '';
    this.phoneNumberError = '';
    this.emailError = '';
    this.passwordError = '';
    this.schoolError = '';
    this.yearOfGraduationError = '';
    this.linkedInError = '';
    if (!this.firstName) {
      this.firstNameError = 'First name is empty!';
      isFormValid = false;
    }
    if (!this.lastName) {
      this.lastNameError = 'Last name is empty!';
      isFormValid = false;
    }
    if (!this.email) {
      this.emailError = 'Email is empty!';
      isFormValid = false;
    }
    if (!this.phoneNumber) {
      this.phoneNumberError = 'Phone Number is empty!';
      isFormValid = false;
    }
    if (!this.password || !this.confirmPassword) {
      // this.passwordError = 'Password is empty!';
      isFormValid = false;
    }
    if (!this.validatePassword()) {
      this.passwordError = 'Password does not match!';
      isFormValid = false;
    }
    if (!this.selectedSchool) {
      this.schoolError = 'Select School!';
      isFormValid = false;
    }
    if (!this.selectedSchool2) {
      this.schoolError = 'Select School!';
      isFormValid = false;
    }
    if (!this.informationConfirm) {
      // this.errorMessage = 'Please Confirm!';
      isFormValid = false;
    }
    if (!this.yearOfGraduation) {
      this.yearOfGraduationError = 'Year of graduation is empty!';
      isFormValid = false;
    }
    if (!this.linkedIn) {
      this.linkedInError = 'LinkedIn URL is empty!';
      isFormValid = false;
    }
    // if (!this.policyConfirm) {
    //   this.errorMessage = 'Please Confirm!';
    //   isFormValid = false;
    // }
    // if (this.validateEmail()) {
    //   this.emailError = 'Invalid domain name!';
    //   return;
    // }
    if (isFormValid) {
      const headers = {
        'Content-Type': 'application/json'
      };
      this.visible = true;
      // tslint:disable-next-line:no-shadowed-variable
      this.http.post<any>(environment.mbatServer + 'user/', data, { headers }).subscribe(data => {
        console.log(data);
        this.visible = false;
        if (data.error) {
          this.errorMessage = data.message;
          console.log(data.message);
        } else {
          localStorage.setItem('idToken', data.access_token);
          sessionStorage.setItem('user', JSON.stringify(data));
          this.router.navigate([this.isBuyTicketFlow ? '/product-list' : '/']);
        }
      });
    }
  }
}
