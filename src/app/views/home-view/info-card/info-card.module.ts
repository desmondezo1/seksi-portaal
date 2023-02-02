import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { MediaModule } from 'src/app/shared/components/compounds/media/media.module';
import { LightBoxModule } from 'src/app/shared/components/compounds/light-box/light-box.module';



@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    LightBoxModule
  ],
  exports: [InfoCardComponent]
})
export class InfoCardModule { }
