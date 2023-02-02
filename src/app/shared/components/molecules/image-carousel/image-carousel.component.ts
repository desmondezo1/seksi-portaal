import { Component, Input } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { LightBoxService } from 'src/app/services/lightBox.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',  
  styleUrls: ['./image-carousel.component.css'],

})
export class ImageCarouselComponent {

  constructor(private lightBoxService: LightBoxService){}
  @Input() images: ImageCarouselInterface[] | string = [];
  @Input() lightBoxImages: ImageCarouselInterface[] | string = [];


  @Input() styles: object = {};

  currentIndex: number = 0;

  getCurrentSlideUrl(): string {
    if (this.images){ 
      if (typeof this.images === 'string') {
          return this.images;
        }
        return `${this.images[this.currentIndex]?.url}`
    } else {
      return 'assets/images/avt.jpg';
    }
   
  }

  goToNext():void {
    if (this.images && this.images.length) {
      const isLastSlide = this.currentIndex === this.images.length -1;
      const newIndex = isLastSlide ? 0 : this.currentIndex + 1;
      this.currentIndex = newIndex;
    }

  }
  gotToPrevious(): void{
    if (this.images && this.images.length) {
    const isFirstSlide = this.currentIndex == 0;
    const newIndex = isFirstSlide ? this.images.length - 1 : this.currentIndex -1; 
    this.currentIndex = newIndex;
    }
  }

  typeofObj(value: string | object){
    return typeof value;
  }

  showCarouselButtons(): boolean {
    if (this.images && this.images.length) {
    if (this.typeofObj(this.images) === 'string') {
      return false;
    }
    if (this.images.length > 1) {
      return true;
    }
   }
    return false;
  
  }

  clickedImage(){
    if (this.lightBoxImages) {
      this.lightBoxService.setMedia(this.lightBoxImages)
      this.lightBoxService.openLightBox();
    }

  }

}
