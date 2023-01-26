import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HeroCardModule } from './hero-card/hero-card.module';
import { InfoCardModule } from './info-card/info-card.module';
import { FilterTabModule } from './filter-tab/filter-tab.module';



@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HeroCardModule, 
    InfoCardModule, 
    FilterTabModule
  ],
  exports: [HomeViewComponent]
})
export class HomeViewModule { }
