import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }

  schools: [];

  ngOnInit(): void {
    this.getSchools()
  }
  getSchools() {
    var hideSchools = ['12', '15', '18', '20', '21', '22', '23', '24']
    const headers = {
      'Content-Type': 'application/json'
    };
    this.http.get<any>(environment.mbatServer + 'schools/', { headers }).subscribe(data => {
      console.log(data);
      data = data.filter(school => hideSchools.indexOf(school['id']) === -1)
      data.forEach(school => {
        school['logo'] = school['name'] + '.png'
      })
      this.schools = data;
      this.schools.sort((a,b)=>b['points'] - a['points'])
    });
  }
}
