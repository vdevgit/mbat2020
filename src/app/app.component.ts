import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {

    this.router.events.pipe(map(() => {
        let child = this.activatedRoute.firstChild;
        while (child) {
            if (child.firstChild) {
                child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data.title) {
                return child.snapshot.data.title + ' | MBAT 2020';
            } else {
                return null;
            }
        }
        return null;
    })).subscribe(title => {
        this.titleService.setTitle(title);
    });

}


  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
