import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
declare var $ :any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router, public auth: AuthService) { }
  user;
  questions: [];
  schools: [];
  selectedSchoolId: '';
  points;
  visible = false;

  ngOnInit(): void {
    if (this.auth.isUserAdmin()) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getQuestions()
      this.getSchools()
    }
  }
  getQuestions() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.http.get<any>(environment.mbatServer + 'questions/', { headers }).subscribe(questions => {
      console.log(questions);
      this.questions = questions;
    });
  }
  getSchools() {
    const headers = {
      'Content-Type': 'application/json'
    };
    this.http.get<any>(environment.mbatServer + 'schools/', { headers }).subscribe(data => {
      console.log(data);
      this.schools = data;
    });
  }
  onSchoolSelected(value) {
    this.selectedSchoolId = value;
    var filteredSchool = this.schools.filter(school => this.selectedSchoolId === school['id'])
    if (filteredSchool.length !== 0 ) {
      this.points = filteredSchool[0]['points'] || '0'
    }
  }
  onPointChange(event: any) {
    this.points = event.target.value;
  }
  updatePoints() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    var filteredSchool;
    const data = {
      "points": this.points
    }
    this.visible = true;
    // tslint:disable-next-line:no-shadowed-variable
    this.http.post(environment.mbatServer + 'schools/'+this.selectedSchoolId, data, { headers }).subscribe(data => {
      console.log(data);
      filteredSchool = this.schools.filter(school => this.selectedSchoolId === school['id'])[0]
      filteredSchool['points'] = this.points
      this.visible = false;
      $('#updatedSuccessfully').modal('show')
    }, ()=>{
      this.visible = false;
    });

  }
}
