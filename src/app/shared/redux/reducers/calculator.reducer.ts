import {ResponseModel} from '../../models/response.model';
import {createReducer, on} from '@ngrx/store';
import { displayResult } from '../actions/calculator.actions';

export const initialState: ReadonlyArray<ResponseModel> = [];


const innerCollectionReducer = createReducer(
  initialState,
  on(
    displayResult,
    (state, { responseModel }) => {
      return [...state, responseModel];
    }
  )
);

// @ts-ignore
export function collectionReducer(state, action): any {
  return innerCollectionReducer(state, action);
}
