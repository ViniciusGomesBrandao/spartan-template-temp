import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InitComponent } from './init/init.component';
import { UiTerminalComponent } from '../_components/ui-terminal/ui-terminal.component';


@NgModule({
  declarations: [
    PagesComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UiTerminalComponent
  ]
})
export class PagesModule { }
