import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  public buttonText = '';

	@Input()
	set text(name: string) {
		this.buttonText = name;
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() color: string = '0068B4';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();
	@Input() isDisabled = false;
	@Input() width: number | null = null;
	@Input() height: number | null = null;
	@Input() padding: string | null = null;
	@Input() margin: string | null = null;
	@Input() border: string | null = null;

	constructor() {}
  
	onClick() {
		this.btnClick.emit();
	}
}
