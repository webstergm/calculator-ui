import {ResponseModel} from './response.model';

export interface AppState {
  readonly responses: ReadonlyArray<ResponseModel>;
}
