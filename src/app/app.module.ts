import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ZippyAppComponent } from './app.component';
import { ZippyComponent } from './my-zippy.component'


@NgModule({
  declarations: [
    ZippyAppComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ZippyAppComponent]
})
export class AppModule { }
