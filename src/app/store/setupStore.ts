import { articleApi } from '@entities/article';
import { galleryApi } from '@entities/image';
import { menuApi } from '@entities/menu';
import { pageApi } from '@entities/page';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  [articleApi.reducerPath]: articleApi.reducer,
  [menuApi.reducerPath]: menuApi.reducer,
  [pageApi.reducerPath]: pageApi.reducer,
  [galleryApi.reducerPath]: galleryApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        menuApi.middleware,
        pageApi.middleware,
        articleApi.middleware,
        galleryApi.middleware,
      ),
    reducer: rootReducer,
  });
};