import { Component, Input } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() media: ImageCarouselInterface[] | VideoCarouselInterface[] | string = [
    {url: 'assets/images/cha.jpg'}, 
    {url: 'assets/images/sexycollege.png'}
  ]
}
