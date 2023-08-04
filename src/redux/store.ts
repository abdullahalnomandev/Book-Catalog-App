import { configureStore } from '@reduxjs/toolkit'
import { api } from './api/apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import userReducer from './features/users/userSlice';
import bookReducer from "./features/book/bookSlice";
 const store = configureStore({
   reducer: {
      book: bookReducer,
      user: userReducer,
     [api.reducerPath]: api.reducer
   },
   middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(api.middleware)
 });

setupListeners(store.dispatch);
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch