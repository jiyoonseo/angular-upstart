import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { NavComponent } from './nav/nav.component';
import { GreetingComponent } from './main/greeting.component';

// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material";
import { Ng2MaterialTestComponent } from './test/ng2-material.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  	AppComponent,
  	GreetingComponent,
  	NavComponent,
  	Ng2MaterialTestComponent
  	],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }