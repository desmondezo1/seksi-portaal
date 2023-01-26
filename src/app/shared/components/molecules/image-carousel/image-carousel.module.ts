import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from './image-carousel.component';
import { AppImageModule } from '../../atoms/image/image.module';



@NgModule({
  declarations: [
    ImageCarouselComponent
  ],
  imports: [
    CommonModule,
    AppImageModule
  ],
  exports: [ImageCarouselComponent]
})
export class ImageCarouselModule { }
