import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.css']
})
export class LightBoxComponent {

  @Input() media: string | ImageCarouselInterface[] | VideoCarouselInterface[] = [
    {url: 'assets/images/cha.jpg'},
    {url: 'assets/images/cha.jpg'},
    {url: 'assets/images/sexycollege.png'},
  ];

  @Output() lightBoxOpened = new EventEmitter<Boolean>();

  closeLightBox(value: boolean){
    console.log('close from bg');
    this.lightBoxOpened.emit(value)
  }

}
