import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `<video controls [src]="src" [style.height]="height" [style.width]="width" [ngStyle]="styles"]></video>`,
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() src: string = '';
  @Input() height: string = 'auto';
  @Input() width: string = 'auto';
  @Input() styles: object = {};
}
