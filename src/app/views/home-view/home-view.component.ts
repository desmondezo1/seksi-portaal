import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AdsInterface } from 'src/app/interfaces/ads.interface';
import { AdsListInterface } from 'src/app/interfaces/adslist.interface';
import { DataService } from 'src/app/services/data.service';
import { LightBoxService } from 'src/app/services/lightBox.service';
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
      private lightBoxService: LightBoxService
      ){}

    
    boxIsOpened: boolean | undefined;

    offset: number = 0;
    total: number = 0;
    limit: number = 20;
    list: AdsInterface[] = [];
    theEnd: boolean = false;
    @ViewChild(CdkVirtualScrollViewport) 
    scroller: CdkVirtualScrollViewport|null= null;

    public filter: string = '';
    public loading: boolean = false;

    ads: AdsListInterface | null = {
      requestTime: 0,
      length: 0,
       list: [] 
      };

      loadMoreData(index: number){
        this.loading = true;
        if (index === this.list.length - 3) {
            this.offset += 20;
            this.dataService.getAds({offset: this.offset, limit: 20, from: this.list[index].post_date})
            .subscribe({
              next: (data: AdsListInterface) => {
              
              this.list = this.list.concat(data.list);
              this.loading = false;
              console.log({data})},
              error: (error) => { console.log({error})} })
          }
        }
      

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
      this.lightBoxService.imageClicked.subscribe((isClicked) =>  this.boxIsOpened = isClicked)
      this.getAds();
    }
}
