import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { CartSlideComponent } from './cart-slide/cart-slide.component';
import { CategorySlideComponent } from './category-slide/category-slide.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    CartSlideComponent,
    CategorySlideComponent,
    SlideMenuComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
