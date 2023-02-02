import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxComponent } from './light-box.component';
import { MediaModule } from '../media/media.module';



@NgModule({
  declarations: [LightBoxComponent],
  imports: [
    CommonModule,
    MediaModule
  ],
  exports: [LightBoxComponent]
})
export class LightBoxModule { }
