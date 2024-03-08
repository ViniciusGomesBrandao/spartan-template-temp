import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HlmButtonDirective } from './_components/ui-button-helm/src/lib/hlm-button.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HlmButtonDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
