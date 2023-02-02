import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from './image-carousel.component';
import { AppImageModule } from '../../atoms/image/image.module';
import { LightBoxService } from 'src/app/services/lightBox.service';



@NgModule({
  declarations: [
    ImageCarouselComponent,
  ],
  imports: [
    CommonModule,    
    AppImageModule
  ],
  providers: [ LightBoxService,],

  exports: [ImageCarouselComponent]
})
export class ImageCarouselModule { }
