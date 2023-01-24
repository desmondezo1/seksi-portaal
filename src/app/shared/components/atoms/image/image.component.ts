import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img [src]="src" [style.width]="width" [style.height]="height"/>`,
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() width: number = 20;
  @Input() height: number = 20;
  @Input() src: string = '';


}
