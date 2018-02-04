import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { Iemployee } from './iemployee/iemployee.component';
import{EmployeeService} from './employee.service';
import{UserService} from './user.service';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    Iemployee,
    UsersComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [EmployeeService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
