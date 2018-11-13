import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PNFComponent } from './pnf/pnf.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './header/home/home.component';
import { SettingsComponent } from './header/settings/settings.component';
import { LeadersComponent } from './header/leaders/leaders.component';
import { StatisticComponent } from './header/statistic/statistic.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PNFComponent,
    HomeComponent,
    SettingsComponent,
    LeadersComponent,
    StatisticComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
