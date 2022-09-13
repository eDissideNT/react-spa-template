import { createReducer } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import * as actions from './actions';
import { AppState } from './types';
import { APP_NAME, APP_VERSION } from '../../constants/env';

const initApp = (state: AppState) => ({
  ...state,
  name: APP_NAME,
  version: APP_VERSION,
});

export const AppReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.initApp, initApp);
});
