import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  url = 'http://localhost:8080/api/calculator';

  constructor(private http: HttpClient) { }

  sendOperation(operation: string, firstOperand: number, secondOperand: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.url + '/' + operation + '/' + firstOperand.toString() + '/' + secondOperand.toString());
  }
}
