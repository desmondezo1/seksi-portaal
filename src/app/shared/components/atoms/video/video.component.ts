import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  template: `<video *ngIf="src" controls [src]="src" [style.height]="height" [style.width]="width" [ngStyle]="styles"></video>`,
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  @Input() src: string | null = null;
  @Input() height: string = 'auto';
  @Input() width: string = 'auto';
  @Input() styles: object = {};
}
