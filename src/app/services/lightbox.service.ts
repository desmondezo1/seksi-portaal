import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ImageCarouselInterface } from "../interfaces/image-carousel.interface";

@Injectable({
    providedIn: 'root'
  })
  
  export class LightBoxService {
    private imageClickedB = new BehaviorSubject<boolean>(false);
    private images = new BehaviorSubject<string | ImageCarouselInterface[]>('')
    public imageClicked = this.imageClickedB.asObservable();
    public imagestream = this.images.asObservable();


    openLightBox(){
        this.imageClickedB.next(true)
    }

    setMedia(obj: string | ImageCarouselInterface[] ): void {
        this.images.next(obj);
    }

    closeLightBox(){
        this.imageClickedB.next(false)
    }
  }