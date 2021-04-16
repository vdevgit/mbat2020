import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
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
import { EventsRegistrationComponent } from './events-registration/events-registration.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { SuccessComponent } from './product/success/success.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { ManageItemsComponent } from './manage-items-base/manage-items/manage-items.component';
import { NotFoundComponent } from './shared/not-found.component';
import { ManageItemsBaseComponent } from './manage-items-base/manage-items-base.component';
import { ShopItemsResolverService } from './shared/shop-items-resolver.service';

import { SchedulesComponent } from './schedules/schedules.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

import { AuthGuard } from './auth.guard';

const routes: Routes  = [

  // Home Page Layout
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full', data: {title: 'Home'}},
      { path: '', component: HomeComponent, pathMatch: 'full', data: {title: 'Home'}},
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
          component: AboutComponent, data: {title: 'About MBAT'}
        },
        {
          path: 'mbat2020',
          component: Mbat2020Component, data: {title: 'MBAT2020'}
        },
        {
            path: 'our-history',
            component: OurHistoryComponent, data: {title: 'Our History'}
        },
        {
            path: 'core-team',
            component: CoreTeamComponent, data: {title: 'Core Team'}
        },
        {
            path: 'schedule',
            component: ScheduleComponent, data: {title: 'Schedule'}
        }
      ],
    },
    { path: 'sponsors', component: SponsorsComponent, data: {title: 'sponsors'} },

    { path: 'tournament',
      children: [
        {
          path: '',
          component: TournamentComponent, data: {title: 'Tournament'}
        },
        {
          path: 'watch-live',
          component: WatchLiveComponent, data: {title: 'Watch Live'}
        },
        {
            path: 'fixtures',
            component: FixturesComponent, data: {title: 'Fixtures'}
        },
        {
            path: 'score-cards',
            component: ScoreCardsComponent, data: {title: 'Score Cards'}
        },
        {
            path: 'leader-board',
            component: LeaderBoardComponent, data: {title: 'Leader Board'}
        }
      ],
    },
    { path: 'sports', component: SportsComponent, data: {title: 'Sports'} },
    { path: 'events', component: EventsComponent, data: {title: 'Events'} },    
    { path: 'events-registration', component: EventsRegistrationComponent, data: {title: 'Events Registration'} },

    { path: 'schedules', component: SchedulesComponent, data: {title: 'Schedules'} },
    { path: 'leaderboards', component: LeaderboardComponent, data: {title: 'Leader Boards'} },  

    { path: 'participants',
      children: [
        {
          path: '',
          component: ParticipantsComponent, data: {title: 'Participants'}
        },
        {
          path: 'participating-schools',
          component: ParticipatingSchoolsComponent, data: {title: 'Participating Schools'}
        },
        {
            path: 'plan-your-trip',
            component: PlanYourTripComponent, data: {title: 'Plan Your Trip'}
        },
        {
            path: 'buy-tickets',
            component: BuyTicketsComponent, data: {title: 'Buy Tickets'}
        }
      ],
    },
    { path: 'contact', component: ContactComponent, data: {title: 'Contact'} },
    { path: 'support', component: SupportComponent, data: {title: 'Support'} },
    { path: 'faqs', component: FaqsComponent, data: {title: 'FAQs'} },
    { path: 'login', component: LoginComponent, data: {title: 'Login'} },
    { path: 'register', component: RegisterComponent, data: {title: 'Register'} },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, data: {title: 'Privacy Policy'} },

    { path: 'product-list', component: ProductListComponent, data: {title: 'Product List'} },
    { path: 'product-details', component: ProductDetailsComponent, data: {title: 'Product Details'} },
    { path: 'cart', component: CartComponent, data: {title: 'Cart'} },
    { path: 'checkout', component: CheckoutComponent, data: {title: 'Checkout'} },
    { path: 'success', component: SuccessComponent, data: {title: 'Success'} },
    { path: 'user-info', component: UserInfoComponent},

    {
      path: 'shop', component: ShopComponent, data: {title: 'shop'}, resolve: [ShopItemsResolverService]
    },
    { path: 'manage-items', redirectTo: '/manage-items/new', pathMatch: 'full', data: {title: 'manage-items'} },
    {
      path: 'manage-items',
      component: ManageItemsBaseComponent, data: {title: 'Manage Items'},
      children: [
        {
          path: 'new',
          component: ManageItemsComponent, data: {title: 'New'}
        },
        {
          path: 'edit/:id',
          component: ManageItemsComponent, data: {title: 'Edit'}
        }
      ]
    },
    { path: 'cart', component: CartComponent, data: {title: 'cart'} },
    { path: '404', component: NotFoundComponent, data: {title: '404'} },
    { path: 'users',  loadChildren: './users/users.module#UsersModule' }

    ],
  },

  // Blank Page layout routes
  {
    path: '',
    component: BlankLayoutComponent,
    children: [

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
        useHash: false,
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
        scrollOffset: [0, 64],
        relativeLinkResolution: 'legacy'
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
