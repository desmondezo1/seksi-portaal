import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdFormComponent } from './create-ad-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAdFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CreateAdFormComponent]
})
export class CreateAdFormModule { }
