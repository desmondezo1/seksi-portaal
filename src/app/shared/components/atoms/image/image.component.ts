import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img [src]="src" [style.max-height]='maxheight' [style.max-width]="maxwidth" [style.width]="width" [style.height]="height" [ngStyle]="styles"/>`,
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() width: any = 'auto';
  @Input() height: any = 'auto';
  @Input() maxheight: any = 'auto';
  @Input() maxwidth: any = 'auto';
  @Input() src: string = '';
  @Input() styles: object = {};


}
