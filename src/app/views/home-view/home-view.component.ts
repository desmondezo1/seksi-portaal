import { Component, OnInit } from '@angular/core';
import { AdsListInterface } from 'src/app/interfaces/adslist.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {
    constructor(private dataService: DataService){}
    ads: AdsListInterface | null = null;
    getAds(){
      this.dataService.getAds()
      .subscribe({
        next: (data: AdsListInterface) => {this.ads = data;
        console.log({data})},
        error: (error) => { console.log({error})} })
    }

    ngOnInit(){
      this.getAds();
    }
}
