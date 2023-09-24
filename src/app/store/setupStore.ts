import { coachApi } from '@entities/coach';
import { menuApi } from '@entities/menu';
import { pageApi } from '@entities/page';
import { partnerApi } from '@entities/partner';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [coachApi.reducerPath]: coachApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
  [partnerApi.reducerPath]: partnerApi.reducer,
  [pageApi.reducerPath]: pageApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        coachApi.middleware,
        menuApi.middleware,
        partnerApi.middleware,
        pageApi.middleware,
      ),
  });
};