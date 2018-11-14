import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth.guard';

const routes: Routes = [
{ path: '', redirectTo: '/header/home/menu', pathMatch: 'full', canActivate: [/*AuthGuard*/] },
  { path: 'home', redirectTo: '/header/home/menu', pathMatch: 'full', canActivate: [/*AuthGuard*/] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
