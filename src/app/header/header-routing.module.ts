import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { LeadersComponent } from './leaders/leaders.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginComponent } from '../login/login.component';
import { PNFComponent } from '../pnf/pnf.component';
import { AuthGuard } from '../common/auth.guard';

const routes: Routes = [
  { path: 'header', component: HeaderComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'leaders', component: LeadersComponent },
    { path: 'statistic', component: StatisticComponent }
  ], canActivate: [/*AuthGuard*/]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PNFComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeaderRoutingModule { }
