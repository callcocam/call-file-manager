import { FileManagerModule } from 'ng6-file-man';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
