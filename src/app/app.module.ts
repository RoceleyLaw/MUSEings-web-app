import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { HackerNewsPageComponent } from './hacker-news-page/hacker-news-page.component';
import { HackerNewsItemComponent } from './hacker-news-item/hacker-news-item.component';

import { HackerNewsApiService } from './hacker-news-api.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    HackerNewsPageComponent,
    HackerNewsItemComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/splash-page',
        pathMatch: 'full'
      },
      {
        path: 'splash-page',
        component: SplashPageComponent
      },
      {
        path:'users',
        component: HackerNewsPageComponent
      },
      {
        path:'item/:id',
        component: UserDetailsComponent
      },
    ])
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
