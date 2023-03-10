import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view.component';
import { HeroCardModule } from './hero-card/hero-card.module';
import { InfoCardModule } from './info-card/info-card.module';
import { FilterTabModule } from './filter-tab/filter-tab.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ScrollingModule } from "@angular/cdk/scrolling";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LightBoxModule } from 'src/app/shared/components/compounds/light-box/light-box.module';


@NgModule({
  declarations: [HomeViewComponent],
  imports: [
    CommonModule,
    HeroCardModule, 
    InfoCardModule, 
    FilterTabModule,
    NgxPaginationModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    LightBoxModule
  ],
  exports: [HomeViewComponent]
})
export class HomeViewModule { }
