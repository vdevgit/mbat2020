import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {

  constructor() { }
  schedules= []
  ngOnInit(): void {
    this.schedules = [
      {"date": "06-May-2021",
        "time": "09:00 AM To 09:30 PM",
        "eventName": "Opening Ceremony",
        "zoomLink": "",
        "description": "Remarks from Dean Massini and Sven",
        "image": "dean.png"},
      {"date": "06-May-2021",
        "time": "09:30 AM To 12:30 PM",
        "eventName": "Dota 2",
        "zoomLink": "",
        "description": "",
        "image": "13-Dota-2.jpg"},
      {"date": "06-May-2021",
        "time": "09:30 AM To 05:00 PM",
        "eventName": "FIFA",
        "zoomLink": "",
        "description": "",
        "image": "17-FIFA-21-20.jpg"},
      {"date": "06-May-2021",
        "time": "10:00 AM To 11:00 AM",
        "eventName": "Individual Running",
        "zoomLink": "",
        "description": "",
        "image": "2-virtual-individual-running-challenge.jpg"},
      {"date": "06-May-2021",
        "time": "10:00 AM To 12:00 PM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/97990345721",
        "zoomLink2": "https://hec-fr.zoom.us/j/92836871987",
        "description": "Yoga, JiuJitsu",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "06-May-2021",
        "time": "12:00 PM To 02:30 PM",
        "eventName": "Video/Board Games",
        "zoomLink": "https://hec-fr.zoom.us/j/97561690789",
        "description": "Escape Room, Jackbox & Among US",
        "image": "07-Engaging-multiplayer-video-games.jpg"},
      {"date": "06-May-2021",
        "time": "01:00 PM To 05:00 PM",
        "eventName": "Counter Strike",
        "zoomLink": "",
        "description": "",
        "image": "12-Counter-Strike-Global-Offensive.jpg"},
      {"date": "06-May-2021",
        "time": "02:00 PM To 03:30 PM",
        "eventName": "Networking Event",
        "zoomLink": "https://hec-fr.zoom.us/j/97910963282",
        "description": "",
        "image": "02-Professional-and-Social-Networking-events.jpg"},
      {"date": "06-May-2021",
        "time": "05:30 PM To 07:30 PM",
        "eventName": "League of Legends",
        "zoomLink": "",
        "description": "",
        "image": "16-League-of-Legends.jpg"},
      {"date": "06-May-2021",
        "time": "05:30 PM To 06:30 PM",
        "eventName": "NBA",
        "zoomLink": "",
        "description": "",
        "image": "18-NBA-2K21-20 .jpg"},
      {"date": "06-May-2021",
        "time": "05:30 PM To 06:30 PM",
        "eventName": "Individual Running",
        "zoomLink": "",
        "description": "",
        "image": "2-virtual-individual-running-challenge.jpg"},
      {"date": "06-May-2021",
        "time": "06:30 PM To 07:30 PM",
        "eventName": "Individual Cycling",
        "zoomLink": "https://hec-fr.zoom.us/j/98717528246",
        "description": "",
        "image": "4-virtual-individual-cycling-challenge.jpg"},
      {"date": "06-May-2021",
        "time": "06:00 PM To 09:00 PM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/98717528246",
        "description": "Mixology, Cooking - French",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "07-May-2021",
        "time": "09:00 AM To 01:00 PM",
        "eventName": "Counter Strike",
        "zoomLink": "",
        "description": "",
        "image": "12-Counter-Strike-Global-Offensive.jpg"},
      {"date": "07-May-2021",
        "time": "08:30 AM To 12:00 PM",
        "eventName": "FIFA",
        "zoomLink": "",
        "description": "",
        "image": "17-FIFA-21-20.jpg"},
      {"date": "07-May-2021",
        "time": "09:00 AM To 10:00 AM",
        "eventName": "Individual Running",
        "zoomLink": "",
        "description": "",
        "image": "2-virtual-individual-running-challenge.jpg"},
      {"date": "07-May-2021",
        "time": "09:00 AM To 11:30 AM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/92978242999",
        "zoomLink2": "https://hec-fr.zoom.us/j/94485873748",
        "description": "Meditation, Mandala",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "07-May-2021",
        "time": "12:30 PM To 01:00 PM",
        "eventName": "NBA",
        "zoomLink": "",
        "description": "",
        "image": "18-NBA-2K21-20 .jpg"},
      {"date": "07-May-2021",
        "time": "12:00 PM to 02:45 PM",
        "eventName": "Video/Board Games",
        "zoomLink": "https://hec-fr.zoom.us/j/98635604195",
        "description": "Escape Room, Jackbox & Among US",
        "image": "07-Engaging-multiplayer-video-games.jpg"},
      {"date": "07-May-2021",
        "time": "02:00 PM To 07:00 PM",
        "eventName": "League of Legends",
        "zoomLink": "",
        "description": "",
        "image": "16-League-of-Legends.jpg"},
      {"date": "07-May-2021",
        "time": "02:00 PM To 05:00 PM",
        "eventName": "Dota 2",
        "zoomLink": "",
        "description": "",
        "image": "13-Dota-2.jpg"},
      {"date": "07-May-2021",
        "time": "01:30 PM To 07:00 PM",
        "eventName": "F1",
        "zoomLink": "",
        "description": "",
        "image": "14-Formula-1-Esports.jpg"},
      {"date": "07-May-2021",
        "time": "02:00 PM To 03:30 PM",
        "eventName": "Networking Event",
        "zoomLink": "https://hec-fr.zoom.us/j/96983783488",
        "description": "",
        "image": "02-Professional-and-Social-Networking-events.jpg"},
      {"date": "07-May-2021",
        "time": "04:00 PM To 05:00 PM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/95504562121",
        "description": "Poker",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "07-May-2021",
        "time": "05:30 PM To 06:30 PM",
        "eventName": "Individual Running",
        "zoomLink": "",
        "description": "",
        "image": "2-virtual-individual-running-challenge.jpg"},
      {"date": "07-May-2021",
        "time": "06:30 PM To 07:30 PM",
        "eventName": "Individual Cycling",
        "zoomLink": "",
        "description": "",
        "image": "4-virtual-individual-cycling-challenge.jpg"},
      {"date": "07-May-2021",
        "time": "05:00 PM To 07:00 PM",
        "eventName": "Virtual DJ Night",
        "zoomLink": "https://hec-fr.zoom.us/j/95796921718",
        "description": "",
        "image": "08-Virtual-DJ-Music-evening.jpg"},
      {"date": "08-May-2021",
        "time": "09:00 AM To 12:15 PM",
        "eventName": "FIFA",
        "zoomLink": "",
        "description": "",
        "image": "17-FIFA-21-20.jpg"},
      {"date": "08-May-2021",
        "time": "09:00 AM To 01:00 PM",
        "eventName": "Fitness Challenge",
        "zoomLink": "",
        "description": "",
        "image": "11-Fitness-challenge.jpg"},
      {"date": "08-May-2021",
        "time": "09:00 AM To 12:00 PM",
        "eventName": "Individual Running",
        "zoomLink": "",
        "description": "",
        "image": "2-virtual-individual-running-challenge.jpg"},
      {"date": "08-May-2021",
        "time": "10:00 AM To 11:30 PM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/95919887377",
        "description": "Bolywood Dance",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "08-May-2021",
        "time": "11:00 PM To 12:30 PM",
        "eventName": "Networking Event",
        "zoomLink": "https://hec-fr.zoom.us/j/94140583564",
        "description": "",
        "image": "02-Professional-and-Social-Networking-events.jpg"},
      {"date": "08-May-2021",
        "time": "01:00 PM To 05:00 PM",
        "eventName": "Counter Strike",
        "zoomLink": "",
        "description": "",
        "image": "12-Counter-Strike-Global-Offensive.jpg"},
      {"date": "08-May-2021",
        "time": "12:00 PM To 05:00 PM",
        "eventName": "F1",
        "zoomLink": "",
        "description": "",
        "image": "14-Formula-1-Esports.jpg"},
      {"date": "08-May-2021",
        "time": "03:00 PM To 04:00 PM",
        "eventName": "Networking Event",
        "zoomLink": "https://hec-fr.zoom.us/j/92540415732",
        "description": "Networking with HEC Clubs",
        "image": "02-Professional-and-Social-Networking-events.jpg"},
      {"date": "08-May-2021",
        "time": "04:00 PM To 05:00 PM",
        "eventName": "MasterClass",
        "zoomLink": "https://hec-fr.zoom.us/j/96934375198",
        "description": "Cooking - Japanese",
        "image": "01-Student-led-Masterclasses.jpg"},
      {"date": "08-May-2021",
        "time": "06:00 PM To 06:30 PM",
        "eventName": "Closing Ceremony",
        "zoomLink": "",
        "description": "Remarks from Dean Massini",
        "image": "dean.png"}]
  }

}
