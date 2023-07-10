import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    FeatureCardComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
