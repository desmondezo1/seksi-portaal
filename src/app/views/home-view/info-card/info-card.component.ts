import { Component, Input, OnInit } from '@angular/core';
import { AdsInterface } from 'src/app/interfaces/ads.interface';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  @Input() media: ImageCarouselInterface[] | VideoCarouselInterface[] | string = [
    {url: 'assets/images/cha.jpg'}, 
    {url: 'assets/images/sexycollege.png'}
  ]
  @Input() ad: AdsInterface = {}

  isPhoneArrayAvailable (): boolean {
    if (typeof this.ad?.phoneArray === 'object') {
       if (this.ad?.phoneArray.length >  0){ 
        return true;
      }
    }
    return false
  }

  isMailArrayAvailable (): boolean {
    if (typeof this.ad?.mailArray === 'object') {
       if (this.ad?.mailArray.length >  0){ 
        return true;
      }
    }
    return false
  }

  formatMedia (): void {
    // if(typeof this.ad.imageArray === 'object' ){
    //     if (this.ad.imageArray?.length > 1) {
            const mediaArray = this.ad.imageArray;
            const newArray = mediaArray?.map((path) => {
               return { url: `${environment.baseUrl}/assets/images/thumbs/${path}.jpg`}
            });
            newArray?.push({ url : `https://${this.ad.site}/${this.ad.image}`})
            this.media = newArray as ImageCarouselInterface[];
            console.log({media: this.media});
        // } else {
        //   this.media =  `${this.ad.site}/${this.ad.image}`;
        //   return;
        // }
    }

    

  ngOnInit(){
    // this.formatMedia();
    if (this.ad.post_date != undefined) {this.ad.post_date = `${+this.ad.post_date * 1000}`;}
     
  }


}
