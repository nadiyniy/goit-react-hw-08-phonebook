import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice';

export const store = configureStore({
  reducer: { phonebook: contactReducer },
});
