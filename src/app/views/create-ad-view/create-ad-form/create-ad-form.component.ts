import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-ad-form',
  templateUrl: './create-ad-form.component.html',
  styleUrls: ['./create-ad-form.component.css']
})
export class CreateAdFormComponent {
  constructor(private fb: FormBuilder) { }
  public createAd = this.fb.group({
    category: new FormControl<String>(''),
    name: new FormControl<String>(''),
    location: new FormControl<String>(''),
    email: new FormControl<String>(''),
    description: new FormControl<String>(''),
    age: new FormControl<number|null>(null),
    sugu: new FormControl<String>(''),
    phone: new FormControl<String>(''),
    media: new FormControl<BinaryData|null|object|object[]>(null),
  });

  selectCategory( value: string) {
    this.createAd.controls.category.setValue(value);
  }

  ngOnInit(){

  }
}
