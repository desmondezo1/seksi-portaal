import { Component, Input, OnInit } from '@angular/core';
import { AdsInterface } from 'src/app/interfaces/ads.interface';
import { ImageCarouselInterface } from 'src/app/interfaces/image-carousel.interface';
import { VideoCarouselInterface } from 'src/app/interfaces/video-carousel.interface';
import { LightBoxService } from 'src/app/services/lightBox.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor(private lightBoxService: LightBoxService){}

  @Input() media: ImageCarouselInterface[] | VideoCarouselInterface[] | string = [
    {url: 'assets/images/cha.jpg'}, 
    {url: 'assets/images/sexycollege.png'}
  ]
  @Input() ad: AdsInterface = {}

  boxIsOpened: boolean | undefined;

  btn: string = '';


  isPhoneArrayAvailable (): boolean {
    if (typeof this.ad?.phoneArray === 'object') {
       if (this.ad?.phoneArray.length >  0){ 
        return true;
      }
    }
    return false
  }

  getDate(): number {
    if (this.ad.post_date !== undefined) {
      return this.ad.post_date * 1000;
    }
    return 0;
    
  }
  isMailArrayAvailable (): boolean {
    if (typeof this.ad?.mailArray === 'object') {
       if (this.ad?.mailArray.length >  0){ 
        return true;
      }
    }
    return false
  }

  setFavourite(id: string | undefined){
    if (typeof id === "string") {
         this.btn = id;
    }
  }

  formatMedia (full = false): ImageCarouselInterface[] | string | any[]{
    if(typeof this.ad.imageArray === 'object' ){
        if (this.ad.imageArray?.length > 0) {
            const mediaArray = this.ad.imageArray;
            const newArray = mediaArray?.map((path) => {
              if (full){
                return { url: `${environment.baseUrl}/assets/images/thumbs/${path}.jpg`}
              }
               return { url: `https://ulakas.b-cdn.net/assets/images/thumbs/${path}.jpg?aspect_ratio=1:1`}
            });
            return newArray;
        } else {
          return ``;
      }
    }
    return []
  }

  ngAfterViewInit(){
        this.formatMedia();
  }



  lightBoxIsOpened(value: boolean){
    console.log('gets to test as '+ value)
    this.boxIsOpened = value;
  }

  openBox(){
    this.boxIsOpened = !this.boxIsOpened;
  }
    

  ngOnInit(){
    this.lightBoxService.imageClicked.subscribe((boxStatus) => this.boxIsOpened = boxStatus);
  }

  ngOnDestroy(){
    this.ad = {};
  }


}
