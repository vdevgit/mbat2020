import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-events-registration',
  templateUrl: './events-registration.component.html',
  styleUrls: ['./events-registration.component.scss']
})
export class EventsRegistrationComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router, public auth: AuthService) { }

  leagueOfLegends: boolean;
  fifa: boolean;
  errorText: string;
  selectedEventsList: string;
  selectedEvents = [];
  visible = false;
  platforms = ['formula1Esports', 'fifa', 'nba']
  teamName = ['virtualGroupRunning', 'virtualGroupCyclingOutter', 'mbatTalent', 'battleOfBands', 'counterStrikeGolbalOffensive', 'dota2Outter', 'fortnite', 'leagueOfLegendsOutter']
  selectedPlatform = {}
  enteredTeamName = {}
  platformNumber = {XBOX: 0, PS4: 1, PC: 2}
  eventNames = {
    virtualGroupRunning : "Virtual group running challenge",
    virtualIndividualRunning: "Virtual individual running challenge",
    virtualGroupCycling: "Virtual group cycling challenge",
    virtualIndividualCycling: "Virtual individual cycling challenge",
    mbatTalent : "MBAT’s Got Talent",
    battleOfBands : "Battle of the Bands",
    footballJuggling: "Football Juggling Challenge",
    basketballTrickShot: "Basketball trick shot Competition",
    basketballSkills: "Basketball Skills Challenge",
    parkour: "Parkour challenge",
    fitness: "Fitness challenge",
    counterStrikeGolbalOffensive: "Counter Strike: Global Offensive",
    dota2: "Dota 2",
    formula1Esports: "Formula 1 Esports",
    fortnite: "Fortnite",
    leagueOfLegends: "League of Legends",
    fifa: "FIFA 21/20",
    nba: "NBA 2K21/20"
  }
  user;

  ngOnInit(): void {
    if (this.auth.userLoggedIn()) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
      this.getRegisteredEvents()
    }
  }
  getRegisteredEvents() {
    const headers = {
      'Content-Type': 'application/json'
    };
    this.http.get<any>('https://europe-west1-mbat-3f9a4.cloudfunctions.net/getRegistrations?user=' + this.user['email'].replace('+', "%2B"), { headers }).subscribe(data => {
      console.log(data)
      data && (this.selectedEvents = data.sort(function(a, b){
        return (+new Date(b['Details'].time)) - (+new Date(a['Details'].time));
      })[0]['Details']['events'])
      this.checkSelectedEvents()
    });
  }
  checkSelectedEvents(){
    setTimeout(()=>{
      this.selectedEventsList = ''
      this.selectedEvents.forEach((eventObj)=>{
        var element = document.getElementById(eventObj.name + "Outter")
        element.setAttribute('class', "blog-item h-100 image-checkbox-checked")
        document.getElementById(eventObj.name)['checked'] = true

        if (eventObj.platform) {
          document.getElementsByName(eventObj.name)[this.platformNumber[eventObj.platform]]['checked'] = true;
          this.selectedPlatform[eventObj.name] = eventObj.platform;
        }

        this.selectedEventsList = this.selectedEventsList ?
          this.selectedEventsList.concat(', ' + this.eventNames[eventObj.name]) : this.eventNames[eventObj.name]
      })
    }, 2000)
  }

  checkboxFunction(e){
    // added selected events
    setTimeout(()=>{
      this.selectedEvents = []
      this.selectedEventsList = ''
      var elements = document.getElementsByName("image[]");
      elements.forEach((element)=>{
        if (element['checked']) {
          this.selectedEvents.push({eventId: element.id})
          this.selectedEventsList = this.selectedEventsList ?
            this.selectedEventsList.concat(', ' + this.eventNames[element.id]) : this.eventNames[element.id]
        }
      })
    });
  }
  onEnterTeamName(event: any) {
    this.enteredTeamName[event.target.id] = event.target.value
  }
  // onCounterStrikeGolbalOffensivePlatformChange(event: any) {
  //   this.selectedPlatform['counterStrikeGolbalOffensive'] = event.target.value;
  // }
  // onDota2PlatformChange(event: any) {
  //   this.selectedPlatform['dota2'] = event.target.value;
  // }
  onFormula1EsportsPlatformChange(event: any) {
    this.selectedPlatform['formula1Esports'] = event.target.value;
  }
  // onFortnitePlatformChange(event: any) {
  //   this.selectedPlatform['fortnite'] = event.target.value;
  // }
  // onLeagueOfLegendsPlatformChange(event: any) {
  //   this.selectedPlatform['leagueOfLegends'] = event.target.value;
  // }
  onFifaPlatformChange(event: any) {
    this.selectedPlatform['fifa'] = event.target.value;
  }
  onNbaPlatformChange(event: any) {
    this.selectedPlatform['nba'] = event.target.value;
  }
  submitSelectedEvents() {
    this.errorText = ''
    var tempSelectedEvents = [];
    // add platform for events
    this.selectedEvents.forEach((eventObj) => {
      var tempPlatform;
      if (this.platforms.indexOf(eventObj.eventId) !== -1) {
        if (this.selectedPlatform[eventObj.eventId]) {
          tempPlatform = this.selectedPlatform[eventObj.eventId];
        } else {
          this.errorText = 'Please select the platform!'
        }
      }
      tempSelectedEvents.push({
        name: eventObj.eventId,
        platform: tempPlatform
      })
    })
    let data = { user: this.user['email'], details: {events: tempSelectedEvents, time: new Date().toISOString()}}
    if (!this.errorText) {
      this.visible = true;
      this.http.post<any>("https://europe-west1-mbat-3f9a4.cloudfunctions.net/eventRegistration", data).subscribe(data => {
        console.log(data);
        this.visible = false;
        this.router.navigate(['/']);
      }, ()=>{
        this.visible = false;
      });
    }
  }
}
