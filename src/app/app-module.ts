import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { SharedModule } from './shared/shared.module';
import { OfferComponent } from './offer-component/offer-component';
import { ContactComponent } from './contact-component/contact-component';
import { AboutComponent } from './about-component/about-component';
import { HomeComponent } from './home-component/home-component';
import { RegulationComponent } from './regulation-component/regulation-component';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    OfferComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    RegulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
