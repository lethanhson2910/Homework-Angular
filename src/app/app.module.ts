import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeworkComponent } from './homework/homework.component';
import {HomeworkModule} from './homework/homework.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeworkComponent
  ],
  imports: [
    BrowserModule,
    HomeworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
