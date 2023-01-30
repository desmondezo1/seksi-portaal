import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { BehaviorSubject, filter, from, map, pairwise, throttleTime } from 'rxjs';
import { AdsInterface } from 'src/app/interfaces/ads.interface';
import { AdsListInterface } from 'src/app/interfaces/adslist.interface';
import { DataService } from 'src/app/services/data.service';
interface Params {
  offset?: number;
  limit?: number | null;
  county?: string;
}
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

    constructor(
      private dataService: DataService, 
      private ngZone: NgZone
      ){}
    offset: number = 0;
    offsset = new BehaviorSubject(null);
    total: number = 0;
    limit: number = 20;
    list: any | null = [];
    theEnd: boolean = false;
    @ViewChild(CdkVirtualScrollViewport) 
    scroller: CdkVirtualScrollViewport|null= null;

    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;

    ads: AdsListInterface | null = {
      requestTime: 0,
      length: 0,
       list: [] 
      };

    getAds(params: Params = {offset: 0, limit : null,  county :''}){
      const { offset, limit, county} = params;
      console.log({offset, limit ,  county});
      this.dataService.getAds({offset, limit, county})
      .subscribe({
        next: (data: AdsListInterface) => {
          this.ads = data;
          this.list = data.list;
          this.total = data.list.length;
        console.log({data})},
        error: (error) => { console.log({error})} })
    }

    filterByCounty(value: string): void{
      this.getAds({ offset: 0, limit: null,county: value})
    }


    ngOnInit(){
      this.getAds();
    }
}
