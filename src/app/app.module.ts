import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { InnerPageLayoutComponent } from './layout/inner-page-layout/inner-page-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreditCardPaymentComponent } from './credit-card-payment/credit-card-payment.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CartComponent } from './product/cart/cart.component';
import { SuccessComponent } from './product/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    Mbat2020Component,
    OurHistoryComponent,
    CoreTeamComponent,
    ScheduleComponent,
    TournamentComponent,
    WatchLiveComponent,
    FixturesComponent,
    ScoreCardsComponent,
    LeaderBoardComponent,
    SportsComponent,
    EventsComponent,
    ParticipantsComponent,
    ParticipatingSchoolsComponent,
    PlanYourTripComponent,
    BuyTicketsComponent,
    ContactComponent,
    SupportComponent,
    FaqsComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainSectionComponent,
    HomeLayoutComponent,
    InnerPageLayoutComponent,
    BlankLayoutComponent,
    ForgotPasswordComponent,
    UserInfoComponent,
    CreditCardPaymentComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
