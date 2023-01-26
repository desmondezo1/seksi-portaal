import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeViewComponent} from './views/home-view/home-view.component'
import { TestsComponent } from './views/tests/tests.component';

const routes: Routes = [
  {path: '', component: HomeViewComponent},
  {path: 'comptest', component: TestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
