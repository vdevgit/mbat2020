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
  points:'points';
  disableAddButton: Boolean;
  visible = false;
  succesText: String;

  ngOnInit(): void {
    if (this.auth.isUserAdmin()) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getQuestions()
      this.getSchools()
      this.disableAddButton = false
    }
  }
  getQuestions() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.http.get<any>(environment.mbatServer + 'questions/', { headers }).subscribe(questions => {
      console.log(questions);
      this.questions = questions.map(question => {
        question.options = question.options.join(',')
        return question
      })
    });
  }
  getSchools() {
    const headers = {
      'Content-Type': 'application/json'
    };
    this.http.get<any>(environment.mbatServer + 'schools/', { headers }).subscribe(data => {
      console.log(data);
      this.schools = data;
      this.schools.sort(function(a, b) {
        // @ts-ignore
        var nameA = a['name']['toUpperCase']();
        // @ts-ignore
        var nameB = b['name']['toUpperCase']();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    });
  }
  onSchoolSelected(value) {
    this.selectedSchoolId = value;
    var filteredSchool = this.schools.filter(school => this.selectedSchoolId === school['id'])
    if (filteredSchool.length !== 0 ) {
      this.points = filteredSchool[0]['points']
    }
  }
  onPointChange(event: any) {
    this.points = event.target.value;
  }
  addQuestionTemplate(event: any) {
    let tempQuestion = {
      active: false,
      expireBy: '',
      options: '',
      question: '',
      questionId: 'newQuestion'
    }
    // @ts-ignore
    this.questions.push(tempQuestion)
    this.disableAddButton = true
  }
  addQuestion(event: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.visible = true
    // @ts-ignore
    let newQuestion = this.questions.filter(question => question['questionId'] === 'newQuestion')[0]
    // @ts-ignore
    newQuestion.options = newQuestion.options.split(',')
    this.http.post(environment.mbatServer + 'questions/', newQuestion, { headers }).subscribe(data => {
      console.log(data);
      let questionIndex = this.questions.findIndex(question=>question['questionId'] === 'newQuestion')
      // @ts-ignore
      this.questions[questionIndex] = data
      // @ts-ignore
      this.questions = [].concat(this.questions);
      this.visible = false;
      this.succesText = 'Question added successfully!'
      this.disableAddButton = false
      $('#successfulModal').modal('show')
    }, ()=>{
      this.visible = false;
    });
  }
  updateQuestion(event: any) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.visible = true
    let tempQuestionId = event.target.id.replace('UpdateField','')
    // @ts-ignore
    let updateQuestion = this.questions.filter(question => question['questionId'] === tempQuestionId)[0]
    // @ts-ignore
    updateQuestion.options = updateQuestion.options.split(',')
    this.http.put(environment.mbatServer + 'questions/' + tempQuestionId, updateQuestion, { headers }).subscribe(data => {
      console.log(data);
      this.visible = false;
      this.succesText = 'Question updated successfully!'
      this.disableAddButton = false
      $('#successfulModal').modal('show')
    }, ()=>{
      this.visible = false;
    });
  }
  deleteQuestion(event: any) {
    if (event.target.id.replace('DeleteField','') === 'newQuestion') {
      this.questions.pop()
      this.disableAddButton = false
    } else {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('idToken')
      };
      this.visible = true
      let tempQuestionId = event.target.id.replace('DeleteField','')
      this.http.delete(environment.mbatServer + 'questions/' + tempQuestionId, { headers }).subscribe(data => {
        this.visible = false;
        let questionIndex = this.questions.findIndex(question=>question['questionId']===tempQuestionId)
        this.questions.splice(questionIndex, 1)
        this.succesText = 'Question deleted successfully!'
        $('#successfulModal').modal('show')
      }, ()=>{
        this.visible = false;
      });
    }
  }
  onQuestionChange(event: any) {
    this.questions.forEach(question => {
      if (question['questionId'] === event.target.id.replace('QuestionField','')) {
        // @ts-ignore
        question['question'] = event.target.value
      }
    })
  }
  onOptionsChange(event: any) {
    this.questions.forEach(question => {
      if (question['questionId'] === event.target.id.replace('OptionsField','')) {
        // @ts-ignore
        question['options'] = event.target.value
      }
    })
  }
  onTimeChange(event: any) {
    this.questions.forEach(question => {
      if (question['questionId'] === event.target.id.replace('TimeField','')) {
        // @ts-ignore
        question['expireBy'] = event.target.value
      }
    })
  }
  onStateChange(event: any) {
    console.log(event.target.id)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    };
    this.visible = true
    let tempQuestionId = event.target.id.replace('StateField','')
    // @ts-ignore
    this.http.post(environment.mbatServer + 'questions/' + tempQuestionId + '/activate', {'status': true}, { headers }).subscribe(data => {
      console.log(data);
      this.visible = false;
      this.succesText = 'State updated successfully!'
      this.disableAddButton = false
      $('#successfulModal').modal('show')
    }, ()=>{
      this.visible = false;
    });
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
      this.succesText = 'Points updated successfully!'
      $('#successfulModal').modal('show')
    }, ()=>{
      this.visible = false;
    });

  }
}
