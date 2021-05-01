import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { environment } from '../../environments/environment';
declare var $ :any;

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
  time;
  visible = false;
  successText = '';
  questionId;
  previouslySelected;
  noQuestion;

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
      if (question.length === 0 || (new Date().toISOString() > question[0].expireBy) ) {
        this.noQuestion = 'No question to vote!'
      } else {
        this.question = question[0].question
        this.options = question[0].options
        this.time = new Date(question[0].expireBy).toLocaleString()
        this.questionId = question[0].questionId
        this.getSubmittedVote()
      }
    });
  }
  getSubmittedVote () {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.http.get<any>(environment.mbatServer + 'votes/' + this.questionId, { headers }).subscribe(vote => {
      this.previouslySelected = vote.length !== 0 && vote[0].option
    });
  }
  onOptionChange(event: any) {
    this.selectedOption = this.options[event.target.id]
  }
  submitVote(event: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.visible = true
    var data = {'option': this.selectedOption, 'questionId': this.questionId}
    // @ts-ignore
    this.http.post(environment.mbatServer + 'votes/', data, { headers }).subscribe(data => {
      console.log(data);
      this.visible = false;
      this.successText = 'Vote submitted successfully!'
      $('#successfulModal').modal('show')
    }, ()=>{
      this.visible = false;
    });
  }

}
