import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { MenuComponent } from './home/menu/menu.component';
import { MenubotComponent } from './home/menu/menubot/menubot.component';
import { MenupersonComponent } from './home/menu/menuperson/menuperson.component';
import { EasyComponent } from './home/menu/menubot/easy/easy.component';
import { MediumComponent } from './home/menu/menubot/medium/medium.component';
import { HardComponent } from './home/menu/menubot/hard/hard.component';
import { OnepcComponent } from './home/menu/menuperson/onepc/onepc.component';
import { FieldComponent } from './home/menu/menubot/field/field.component';

@NgModule({
  declarations: [MenuComponent, MenubotComponent, MenupersonComponent, EasyComponent, MediumComponent, HardComponent, OnepcComponent, FieldComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
