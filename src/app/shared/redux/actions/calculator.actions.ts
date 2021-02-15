import {createAction, props} from '@ngrx/store';

export const displayResult = createAction('[Counter Component] Increment',
  props<{ responseModel: any }>());
