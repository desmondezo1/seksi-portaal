import { Component, Input } from '@angular/core';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  @Input() media: string | VideoCarouselInterface[] | ImageCarouselInterface [] = '';
  mediaType: 'image'| 'video' = 'image';
  @Input() styles: object = {};

  isImage: boolean = true;

  // check media type of media input 
  checkUrlorMediaType(media: string | VideoCarouselInterface[] | ImageCarouselInterface[]): void{
    if (typeof media !== "string") {
       media = media[0].url;
    }
    const images = ["jpg", "gif", "png", "tiff", "tif", "bmp", "jpeg", "eps", "webp"];
    let extension: string = '';
    
    // check if it's a full url
    try {
      const url = new URL(media);
      extension = url.pathname.split(".")[1];
    } catch (error) {
       // split the path if not a url
       extension = media.split(".")[1];
    }
    if (images.includes(extension)) {
      this.isImage = true;
    }else{
      this.isImage = false;
    }
    
  }

  ngOnInit(): void {
    this.checkUrlorMediaType(this.media);
  }

}
