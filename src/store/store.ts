import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { IS_PROD } from '../constants/env';

const rootReducer = combineReducers({
  foo: () => ({}), // remove it and connect your reducers
});

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: !IS_PROD,
});

export type RootState = ReturnType<typeof rootReducer>;
