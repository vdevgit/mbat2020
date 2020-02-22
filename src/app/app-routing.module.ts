import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Mbat2020Component } from './about/mbat2020/mbat2020.component';
import { OurHistoryComponent } from './about/our-history/our-history.component';
import { CoreTeamComponent } from './about/core-team/core-team.component';
import { ScheduleComponent } from './about/schedule/schedule.component';
import { TournamentComponent } from './tournament/tournament.component';
import { WatchLiveComponent } from './tournament/watch-live/watch-live.component';
import { FixturesComponent } from './tournament/fixtures/fixtures.component';
import { ScoreCardsComponent } from './tournament/score-cards/score-cards.component';
import { LeaderBoardComponent } from './tournament/leader-board/leader-board.component';
import { SportsComponent } from './sports/sports.component';
import { EventsComponent } from './events/events.component';
import { ParticipantsComponent } from './participants/participants.component';
import { ParticipatingSchoolsComponent } from './participants/participating-schools/participating-schools.component';
import { PlanYourTripComponent } from './participants/plan-your-trip/plan-your-trip.component';
import { BuyTicketsComponent } from './participants/buy-tickets/buy-tickets.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { FaqsComponent } from './faqs/faqs.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { InnerPageLayoutComponent } from './layout/inner-page-layout/inner-page-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './product/cart/cart.component';
import { SuccessComponent } from './product/success/success.component';

const routes = [

  // Home Page Layout
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '', component: HomeComponent, pathMatch: 'full'},
    ]
  },

  // Inner Page layout routes

  { path: '',
    component: InnerPageLayoutComponent,
    children: [

    { path: 'about',
      children: [
        {
          path: '',
          component: AboutComponent
        },
        {
          path: 'mbat2020',
          component: Mbat2020Component
        },
        {
            path: 'our-history',
            component: OurHistoryComponent
        },
        {
            path: 'core-team',
            component: CoreTeamComponent
        },
        {
            path: 'schedule',
            component: ScheduleComponent
        }
      ],
    },
    { path: 'tournament',
      children: [
        {
          path: '',
          component: TournamentComponent
        },
        {
          path: 'watch-live',
          component: WatchLiveComponent
        },
        {
            path: 'fixtures',
            component: FixturesComponent
        },
        {
            path: 'score-cards',
            component: ScoreCardsComponent
        },
        {
            path: 'leader-board',
            component: LeaderBoardComponent
        }
      ],
    },
    { path: 'sports', component: SportsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'participants',
      children: [
        {
          path: '',
          component: ParticipantsComponent
        },
        {
          path: 'participating-schools',
          component: ParticipatingSchoolsComponent
        },
        {
            path: 'plan-your-trip',
            component: PlanYourTripComponent
        },
        {
            path: 'buy-tickets',
            component: BuyTicketsComponent
        }
      ],
    },
    { path: 'contact', component: ContactComponent },
    { path: 'support', component: SupportComponent },
    { path: 'faqs', component: FaqsComponent },

    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'success', component: SuccessComponent },


    ],
  },

  // Blank Page layout routes
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: '**', component: PagenotfoundComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
