import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-tab',
  templateUrl: './filter-tab.component.html',
  styleUrls: ['./filter-tab.component.css']
})
export class FilterTabComponent {
  btn: string = 'kõik';

  @Output() filterValue = new EventEmitter();
  filterByCounty(value: string){
    
    if(value == ""){
      this.btn = 'kõik';
    }else{
      this.btn = value;
    }
    this.filterValue.emit(value);
  }
}
