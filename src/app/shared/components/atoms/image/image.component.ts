import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  template: `<img [src]="src" [style.width]="width" [style.height]="height" [ngStyle]="styles"/>`,
  styleUrls: ['./image.component.css'],
})
export class ImageComponent {
  @Input() width: any = 'auto';
  @Input() height: any = 'auto';
  @Input() src: string = '';
  @Input() styles: object = {};


}
