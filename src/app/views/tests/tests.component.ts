import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {

  boxIsOpened: boolean | undefined;

  lightBoxIsOpened(value: boolean){
    console.log('gets to test as '+ value)
    this.boxIsOpened = value;
  }

  openBox(){
    this.boxIsOpened = !this.boxIsOpened;
  }
}
