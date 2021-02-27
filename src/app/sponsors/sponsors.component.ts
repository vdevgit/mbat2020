import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {

  firstName: string;
  lastName: string;
  partner: boolean;
  sponsor: boolean;
  message: string;
  visible = false;
  emailId: string;
  constructor(private http: HttpClient, public router: Router) { }

  errorMessage: string;

  validateSponsors(event: any) {
    return ""
  }
  validatePartners(event: any) {
    return ""
  }
  submitInterest() {
    console.log(this.firstName);
    if ( this.firstName && this.lastName && this.emailId && this.message) {
      console.log(this.message);
      this.visible = true;
      let data = { fristName: this.firstName, lastName: this.lastName, emailId: this.emailId,
                    message: this.message, sponsor: this.sponsor?true:false, partner: this.partner?true:false
                  }
      this.http.post<any>("https://formspree.io/mknzorgk", data).subscribe(data => {
        console.log(data);
        this.visible = false;
        this.router.navigate(['/']);
      });
    }
  }

  ngOnInit(): void {
  }

}
