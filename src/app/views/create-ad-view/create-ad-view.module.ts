import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAdViewComponent } from './create-ad-view.component';
import { CreateAdFormModule } from './create-ad-form/create-ad-form.module';



@NgModule({
  declarations: [
    CreateAdViewComponent
  ],
  imports: [
    CommonModule,
    CreateAdFormModule,
  ],
  exports: [CreateAdViewComponent]
})
export class CreateAdViewModule { }
