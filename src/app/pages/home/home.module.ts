import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeatureCardComponent,
    OfferComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
