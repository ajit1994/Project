import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calculator } from '../model/calculator.model';

@Injectable({
  providedIn: 'root'
})
export class Servicelist {

  apiEndPoint='http://api.mathjs.org/v4/';

  constructor(private http:HttpClient) { }

GetResult(result){
  return this.http.post(this.apiEndPoint,result);
  }


}
