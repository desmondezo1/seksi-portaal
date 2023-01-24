import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinkComponent } from './nav-link.component';
import { AppButtonModule } from 'src/app/shared/components/atoms/button/button.module';



@NgModule({
  declarations: [NavLinkComponent],
  imports: [
    CommonModule, AppButtonModule
  ],
  exports: [NavLinkComponent]
})
export class NavLinkModule { }
