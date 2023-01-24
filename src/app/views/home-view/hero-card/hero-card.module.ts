import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppButtonModule } from 'src/app/shared/components/atoms/button/button.module';
import { HeroCardComponent } from './hero-card.component';
import { AppImageModule } from 'src/app/shared/components/atoms/image/image.module';



@NgModule({
  declarations: [HeroCardComponent],
  imports: [
    CommonModule,
    AppButtonModule,
    AppImageModule
  ],
  exports: [HeroCardComponent]
})
export class HeroCardModule { }
