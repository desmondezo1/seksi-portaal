import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTabComponent } from './filter-tab.component';



@NgModule({
  declarations: [
    FilterTabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FilterTabComponent]
})
export class FilterTabModule { }
