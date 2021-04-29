import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  constructor(private http: HttpClient, public auth: AuthService) { }
  question;
  options;
  selectedOption;

  ngOnInit(): void {
    if (this.auth.userLoggedIn()) {
      // this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getActiveQuestion()
    }
  }
  getActiveQuestion() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.http.get<any>(environment.mbatServer + 'questions/active/', { headers }).subscribe(question => {
      console.log(question);
      this.question = question[0].question
      this.options = question[0].options
    });
  }
  onOptionChange(event: any) {
    this.selectedOption = this.options[event.target.id]
  }
  submitVote(event: any) {
    console.log(this.selectedOption)
  }

}
