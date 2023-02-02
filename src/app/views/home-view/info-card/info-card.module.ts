import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { MediaModule } from 'src/app/shared/components/compounds/media/media.module';
import { LightBoxModule } from 'src/app/shared/components/compounds/light-box/light-box.module';
import { LightBoxService } from 'src/app/services/lightBox.service';



@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
  ],
  providers: [LightBoxService],
  exports: [InfoCardComponent]
})
export class InfoCardModule { }
