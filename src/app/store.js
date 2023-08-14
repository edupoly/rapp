import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todolistSlice'
import { countriesApi } from '../services/countriesApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { commentApi } from '../services/commentsApi';
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todos:todoReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [commentApi.reducerPath]:commentApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware,commentApi.middleware),
})
setupListeners(store.dispatch)