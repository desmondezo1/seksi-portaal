import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.css']
})
export class NavLinkComponent {
  constructor(private router: Router) {
    
  }
  goToCreatePage(){
    this.router.navigate(['/create']);
  }
}
