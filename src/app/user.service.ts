import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private url :string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http:Http) {
   }

   getUsers(){
     return this._http.get(this.url).map((res:Response)=>res.json());
   }

}
