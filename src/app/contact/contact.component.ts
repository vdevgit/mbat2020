import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactUsForm = {}
  name: string;
  surname: string;
  schoolname: string;
  email: string;
  subject: string;
  message: string;
  visible = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  submitContactUs(event) {
    console.log(this.name);
    if ( this.name && this.surname && this.schoolname && this.email && this.subject && this.message) {
      this.visible = true;
      let data = { name: this.name, surname: this.surname, schoolname: this.schoolname, email: this.email, subject: this.subject, message: this.message }
      this.http.post<any>("https://formspree.io/mknzorgk", data).subscribe(data => {
        console.log(data);
        this.visible = false;
      });
    }
  }

}
