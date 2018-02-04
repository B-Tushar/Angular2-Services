import { Injectable } from '@angular/core';
import {Iemployee} from './iemployee/iemployee.component';

@Injectable()
export class EmployeeService {

  constructor() { }
  getEmployee():Iemployee[]{
    return[
      {code:'101',name:'Paul',gender:'Male',salary:'10000'},
      {code:'102',name:'Max',gender:'Male',salary:'15000'},
      {code:'103',name:'David',gender:'Male',salary:'20000'},
      {code:'104',name:'Imran',gender:'Male',salary:'25000'},
    ];
  }
}
