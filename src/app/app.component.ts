import { Component, OnInit } from '@angular/core';
import {Iemployee} from './iemployee/iemployee.component';
import{EmployeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';
  constructor(private _service:EmployeeService){}
  Employee:Iemployee[];
   ngOnInit() {
     this.Employee = this._service.getEmployee();
   }
}
