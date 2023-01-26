import { Component, Input } from '@angular/core';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css']
})
export class VideoCarouselComponent {
  @Input() videos: VideoCarouselInterface[] | string = [];
  @Input() styles: object = {};
  currentIndex: number = 0 ;

  getVideoUrl(): string {
    if (typeof this.videos === 'string') {
      return this.videos;
    }
    return `${this.videos[this.currentIndex].url}`
  }

  goToNext(): void {
    const isLastIndex = this.currentIndex === this.videos.length - 1;
    const newIndex = isLastIndex ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }

  gotToPrevious(): void{
    const isFirstSlide = this.currentIndex == 0;
    const newIndex = isFirstSlide ? this.videos.length - 1 : this.currentIndex -1; 
    this.currentIndex = newIndex;
  }

  typeofObj(value: string | object){
    return typeof value;
  }

  showCarouselButtons(): boolean {
    if (this.typeofObj(this.videos) === 'string') {
      return false;
    }
    if (this.videos.length > 1) {
      return true;
    }
    return false;
  }
}
