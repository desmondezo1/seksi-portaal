import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { from } from 'rxjs';
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
    constructor(private dataService: DataService){}
    offset: number = 0;
    total: number = 0;
    limit: number = 20;
    list: any | null = [];

    public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = false;

    public labels: any = {
      previousLabel: 'Previous',
      nextLabel: 'Next',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

    ads: AdsListInterface | null = {
      requestTime: 0,
      length: 0,
       list: [] 
      };
      
      public config: PaginationInstance = {
        id: 'advanced',
        itemsPerPage: 10,
        currentPage: 1
    };

    onPageChange(number: number) {
      this.config.currentPage = number;
  }
  onPageBoundsCorrection(number: number) {
    this.config.currentPage = number;
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
      this.getAds({ offset: 0, limit: 20,county: value})
    }

    ngOnInit(){
      this.getAds();
    }
}
