import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

 const store = configureStore({
   reducer: {
     //  book: productReducer,
     [api.reducerPath]: api.reducer
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(api.middleware)
 });

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch