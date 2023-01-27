import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppButtonModule } from './shared/components/atoms/button/button.module';
import { AppImageModule } from './shared/components/atoms/image/image.module';
import { HeaderComponent } from './core/header/header.component';
import { HeaderModule } from './core/header/header.module';
import { NavLinkComponent } from './core/nav-link/nav-link.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HomeViewModule } from './views/home-view/home-view.module';
import { FooterModule } from './core/footer/footer.module';
import { TestsComponent } from './views/tests/tests.component';
import { TestsModule } from './views/tests/tests.module';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppButtonModule,
    AppImageModule,
    HeaderModule, 
    HomeViewModule,
    FooterModule,
    HttpClientModule,
    TestsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
