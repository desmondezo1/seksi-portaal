import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { MediaModule } from 'src/app/shared/components/compounds/media/media.module';



@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    MediaModule
  ],
  exports: [InfoCardComponent]
})
export class InfoCardModule { }
