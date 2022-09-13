import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { IS_PROD } from '../constants/env';
import { AppReducer } from '../app/state/reducer';

const reducer = combineReducers({
  app: AppReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
  devTools: !IS_PROD,
});

export type Store = ReturnType<typeof reducer>;
