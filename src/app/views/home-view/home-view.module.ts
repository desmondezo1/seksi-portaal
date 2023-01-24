import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HeroCardModule } from './hero-card/hero-card.module';



@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule, HeroCardModule
  ],
  exports: [HomeViewComponent]
})
export class HomeViewModule { }
