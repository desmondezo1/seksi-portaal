import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCarouselComponent } from './video-carousel.component';
import { VideoModule } from '../../atoms/video/video.module';



@NgModule({
  declarations: [VideoCarouselComponent],
  imports: [
    CommonModule,
    VideoModule
  ],
  exports: [VideoCarouselComponent]
})
export class VideoCarouselModule { }
