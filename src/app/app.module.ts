import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { UserDashboard } from './user-dashboard/user-dashboard';
import { UserItem } from './user-item/user-item';

import { UserService } from './user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ChartsModule } from 'ng2-charts';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    UserDashboard,
    UserItem,
    UserDetailsComponent,
    LoadingSpinnerComponent
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
        component: UserDashboard
      },
      {
        path:'user-item/:id',
        component: UserDetailsComponent
      },
    ])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
