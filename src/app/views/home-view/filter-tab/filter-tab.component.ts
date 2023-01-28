import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css']
})
export class FilterTabComponent {
  btn: string = 'kõik';
  buttonList: string [] = 
  [
    'Harjumaa',
    'Lääne-Virumaa',
    'Tartumaa',
    'Pärnumaa',
    'Ida-Virumaa',
    'Viljandimaa',
    'Raplamaa',
    'Võrumaa',
    'Saaremaa',
    'Jõgevamaa',
    'Valgamaa',
    'Läänemaa',
    'Hiiumaa',
    'Järvamaa',
  ];

  @Output() filterValue = new EventEmitter();


  moveToFirst(index: any) {
    const clickedButton = this.buttonList.splice(index, 1);
    this.buttonList.unshift(clickedButton[0]);
  }

  filterByCounty(value: string, i:number|null = null){
    this.btn = value;
    if(value == 'kõik'){
      value = '';
    }
    if (i) {
      this.moveToFirst(i);
    }
   
    this.filterValue.emit(value);
  }
}
