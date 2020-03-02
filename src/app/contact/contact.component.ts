import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: string;
  surname: string;
  schoolname: string;
  email: string;
  subject: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
