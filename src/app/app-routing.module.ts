import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeViewComponent} from './views/home-view/home-view.component'
import { TestsComponent } from './views/tests/tests.component';
import { CreateAdViewComponent } from './views/create-ad-view/create-ad-view.component';

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'comptest', component: TestsComponent}, 
  {path: 'create', component: CreateAdViewComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
