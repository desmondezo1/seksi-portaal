import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {
  constructor(private router: Router){}
  createAd(){
    this.router.navigate(['/create'])
  }
}
