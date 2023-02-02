import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import { InfoCardModule } from '../home-view/info-card/info-card.module';
import { ImageCarouselModule } from 'src/app/shared/components/molecules/image-carousel/image-carousel.module';
import { VideoCarouselModule } from 'src/app/shared/components/molecules/video-carousel/video-carousel.module';
import { MediaModule } from 'src/app/shared/components/compounds/media/media.module';
import { FilterTabModule } from '../home-view/filter-tab/filter-tab.module';
import { LightBoxModule } from 'src/app/shared/components/compounds/light-box/light-box.module';



@NgModule({
  declarations: [TestsComponent],
  imports: [
    CommonModule,
    InfoCardModule,
    ImageCarouselModule,
    VideoCarouselModule,
    MediaModule,
    FilterTabModule,
    LightBoxModule
  ],
  exports: [TestsComponent]
})
export class TestsModule { }
