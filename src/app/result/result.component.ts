import { Component } from '@angular/core';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{
  responses$: any;

  constructor(private store: Store) {
    // @ts-ignore
    this.responses$ = this.store.select('calculator');
  }
}
