import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AppImageModule } from 'src/app/shared/components/atoms/image/image.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppImageModule
  ],
  exports: [FooterComponent]

})
export class FooterModule { }
