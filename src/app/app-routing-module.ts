import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { OfferComponent } from './offer-component/offer-component';
import { HomeComponent } from './home-component/home-component';
import { RegulationComponent } from './regulation-component/regulation-component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'offer',
    component: OfferComponent
  },
  {
    path: '**', 
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
