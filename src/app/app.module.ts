import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { AppRouterModule } from './router.module';

import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeViewComponent } from './components/views/home/home.view';
import { GoBackComponent } from './components/go-back/go-back.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HomeViewComponent,
    GoBackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    NouisliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
