import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InfopageComponent } from './infopage/infopage.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    routingComponents,
    CheckboxComponent,
    InfopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
