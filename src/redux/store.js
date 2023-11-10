import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: { phonebook: contactReducer, auth: authReducer },
});
