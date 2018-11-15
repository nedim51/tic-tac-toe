import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MenuComponent } from './home/menu/menu.component';
import { MenubotComponent } from './home/menubot/menubot.component';
import { MenupersonComponent } from './home/menuperson/menuperson.component';
import { FieldComponent } from './home/field/field.component';

@NgModule({
  declarations: [MenuComponent, MenubotComponent, MenupersonComponent, FieldComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]})

export class HeaderModule { }
