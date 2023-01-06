import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProcessflowSimpleComponent } from './processflow-simple/processflow-simple.component';
import { ProcessflowSimple2Component } from './processflow-simple2/processflow-simple2.component';
import { ProcessflowSimple3Component } from './processflow-simple3/processflow-simple3.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProcessflowSimpleComponent,
    ProcessflowSimple2Component,
    ProcessflowSimple3Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
