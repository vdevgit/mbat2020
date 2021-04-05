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
  selectedEvents = [];
  visible = false;
  platforms = ['counterStrikeGolbalOffensive', 'dota2', 'formula1Esports', 'fortnite', 'leagueOfLegends', 'fifa', 'nba'];
  selectedPlatform = {};
  platformNumber = {XBOX: 0, PS4: 1, PS5: 2}

  ngOnInit(): void {
    if (this.auth.userLoggedIn()) {
      this.selectedEvents = [{event:'virtualGroupRunning'},{event:'nba', platform: 'PS5'}]
      setTimeout(()=>{
        this.selectedEvents.forEach((event)=>{
          var element = document.getElementById(event.event + "Outter")
          element.setAttribute('class', "blog-item h-100 image-checkbox-checked")
          document.getElementById(event.event)['checked'] = true

          if (event.platform) {
            document.getElementsByName(event.event)[this.platformNumber[event.platform]]['checked'] = true;
            this.selectedPlatform[event.event] = event.platform;
          }
        })
      },2000);
    }
  }

  checkboxFunction(e){
    setTimeout(()=>{
      this.selectedEvents = []
      var elements = document.getElementsByName("image[]");
      elements.forEach((element)=>{
        element['checked'] && this.selectedEvents.push({event: element.id})
      })
    });
  }
  onCounterStrikeGolbalOffensivePlatformChange(event: any) {
    this.selectedPlatform['counterStrikeGolbalOffensive'] = event.target.value;
  }
  onDota2PlatformChange(event: any) {
    this.selectedPlatform['dota2'] = event.target.value;
  }
  onFormula1EsportsPlatformChange(event: any) {
    this.selectedPlatform['formula1Esports'] = event.target.value;
  }
  onFortnitePlatformChange(event: any) {
    this.selectedPlatform['fortnite'] = event.target.value;
  }
  onLeagueOfLegendsPlatformChange(event: any) {
    this.selectedPlatform['leagueOfLegends'] = event.target.value;
  }
  onFifaPlatformChange(event: any) {
    this.selectedPlatform['fifa'] = event.target.value;
  }
  onNbaPlatformChange(event: any) {
    this.selectedPlatform['nba'] = event.target.value;
  }
  submitSelectedEvents() {
    this.errorText = ''
    let tempUser = JSON.parse(sessionStorage.getItem('user'));
    var tempSelectedEvents = [];
    this.selectedEvents.forEach((eventObj) => {
      var tempPlatform;
      if (this.platforms.indexOf(eventObj.event) !== -1) {
        if (this.selectedPlatform[eventObj.event]) {
          tempPlatform = this.selectedPlatform[eventObj.event];
        } else {
          this.errorText = 'Please select the platform!'
        }
      }
      tempSelectedEvents.push({
        event: eventObj.event,
        platform: tempPlatform
      })
    })
    let data = { user: tempUser['email'], details: tempSelectedEvents}
    if (!this.errorText) {
      this.visible = true;
      this.http.post<any>("https://europe-west1-mbat-3f9a4.cloudfunctions.net/eventRegistration", data).subscribe(data => {
        console.log(data);
        this.visible = false;
        // this.router.navigate(['/']);
      }, ()=>{
        this.visible = false;
      });
    }
  }
}
