import { configureStore } from '@reduxjs/toolkit';
import moduleSelectorSlice from './reducers/modulesReducer';
import CurrentMonthSlice from './reducers/calendarReducer';
import { apiSlice } from './api/apiSlice';
import userSlice from './reducers/userSlice';
import rankingSlice from './reducers/rankingSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    selected: moduleSelectorSlice,
    currentMonthIndex: CurrentMonthSlice,
    user: userSlice,
    ranking: rankingSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});
