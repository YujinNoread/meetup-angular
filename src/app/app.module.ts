import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IMaskModule} from 'angular-imask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginNameComponent } from './main/login-name/login-name.component';
import { ColumnComponent } from './main/column/column.component';
import { LoginCompanyComponent } from './main/login-company/login-company.component';
import { CompleteComponent } from './complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginNameComponent,
    ColumnComponent,
    LoginCompanyComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
