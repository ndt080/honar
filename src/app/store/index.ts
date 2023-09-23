import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { rootReducer, setupStore } from './setupStore.ts';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = setupStore();
