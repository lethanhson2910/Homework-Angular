import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HomeworkModule} from './homework/homework.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HomeworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
