import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';
import { LightBoxService } from 'src/app/services/lightBox.service';

@Component({
  selector: 'app-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.css']
})
export class LightBoxComponent {

  constructor(private lightBoxService: LightBoxService){}

  @Input() media: string | ImageCarouselInterface[] | VideoCarouselInterface[] = [
    {url: 'assets/images/cha.jpg'},
    {url: 'assets/images/cha.jpg'},
    {url: 'assets/images/sexycollege.png'},
  ];

  ngOnInit(){
    this.lightBoxService.imagestream.subscribe((media) => this.media = media)
  }

  @Output() lightBoxOpened = new EventEmitter<Boolean>();

  closeLightBox(){
    this.lightBoxService.closeLightBox()
  }

}
