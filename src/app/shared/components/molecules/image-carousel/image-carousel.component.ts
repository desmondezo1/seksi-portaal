import { Component, Input } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',  
  styleUrls: ['./image-carousel.component.css'],

})
export class ImageCarouselComponent {
  @Input() images: ImageCarouselInterface[] | string = [
    { url: 'https://picsum.photos/200/300?grayscale'},
    { url: 'https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o'},
    { url: 'https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s'}
  ];

  @Input() styles: object = {};

  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    if (typeof this.images === 'string') {
      return this.images;
    }
    return `${this.images[this.currentIndex].url}`
  }

  goToNext():void {
    const isLastSlide = this.currentIndex === this.images.length -1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
    this.currentIndex = newIndex;
  }
  gotToPrevious(): void{
    const isFirstSlide = this.currentIndex == 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex -1; 
    this.currentIndex = newIndex;
  }

  typeofObj(value: string | object){
    return typeof value;
  }

  showCarouselButtons(): boolean {
    if (this.typeofObj(this.images) === 'string') {
      return false;
    }
    if (this.images.length > 1) {
      return true;
    }
    return false;
  }

}
