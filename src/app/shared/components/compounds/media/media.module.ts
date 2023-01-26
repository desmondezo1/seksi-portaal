import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { ImageCarouselModule } from '../../molecules/image-carousel/image-carousel.module';
import { VideoCarouselModule } from '../../molecules/video-carousel/video-carousel.module';



@NgModule({
  declarations: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    ImageCarouselModule,
    VideoCarouselModule
  ],
  exports:[MediaComponent]
})
export class MediaModule { }
