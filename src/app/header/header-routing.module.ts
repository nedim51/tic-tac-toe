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
import { MenuComponent } from './home/menu/menu.component';
import { MenubotComponent } from './home/menu/menubot/menubot.component';
import { EasyComponent } from './home/menu/menubot/easy/easy.component';
import { MediumComponent } from './home/menu/menubot/medium/medium.component';
import { HardComponent } from './home/menu/menubot/hard/hard.component';
import { FieldComponent } from './home/menu/menubot/field/field.component';
import { OnepcComponent } from './home/menu/menuperson/onepc/onepc.component';
import { MenupersonComponent } from './home/menu/menuperson/menuperson.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent, children: [
    { path: 'home', component: HomeComponent, children: [
      { path: 'menu', component: MenuComponent },
      { path: 'menubot', component: MenubotComponent },
      { path: 'easy', component: EasyComponent },
      { path: 'field', component: FieldComponent },
      { path: 'medium', component: MediumComponent },
      { path: 'field', component: FieldComponent },
      { path: 'hard', component: HardComponent },
      { path: 'field', component: FieldComponent }, 
      { path: 'menuperson', component: MenupersonComponent },
      { path: 'onepc', component: OnepcComponent },
      { path: 'field', component: FieldComponent }
    ]},
    { path: 'settings', component: SettingsComponent }, 
    { path: 'leaders', component: LeadersComponent }, 
    { path: 'statistic', component: StatisticComponent }], canActivate: [/*AuthGuard*/]}, 
  { path: 'login', component: LoginComponent }, 
  { path: '**', component: PNFComponent }];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeaderRoutingModule { }
