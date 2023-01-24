import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppImageModule } from 'src/app/shared/components/atoms/image/image.module';
import { NavLinkModule } from '../nav-link/nav-link.module';
import { AppButtonModule } from 'src/app/shared/components/atoms/button/button.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    AppImageModule,
    NavLinkModule,
    AppButtonModule,
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
