import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxComponent } from './light-box.component';
import { MediaModule } from '../media/media.module';
import { LightBoxService } from 'src/app/services/lightBox.service';



@NgModule({
  declarations: [LightBoxComponent],
  imports: [
    CommonModule,
    MediaModule
  ],
  providers: [LightBoxService],
  exports: [LightBoxComponent]
})
export class LightBoxModule { }
