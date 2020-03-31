import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    EntryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
