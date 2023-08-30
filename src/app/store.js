import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todolist/todolistSlice';
import userReducer from '../features/pages/userSlice';
import { countriesApi } from '../services/countriesApi';
import { setupListeners } from '@reduxjs/toolkit/query'
import { commentApi } from '../services/commentsApi';
import { customerApi } from '../services/customersApi';
import { userApi } from '../services/usersApi';
import {propertyApi} from '../services/propertiesApi';

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todos:todoReducer,
    userR:userReducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [commentApi.reducerPath]:commentApi.reducer,
    [customerApi.reducerPath]:customerApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    [propertyApi.reducerPath]:propertyApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      countriesApi.middleware,
      commentApi.middleware,
      customerApi.middleware,
      userApi.middleware,
      propertyApi.middleware
    ),
})
setupListeners(store.dispatch)