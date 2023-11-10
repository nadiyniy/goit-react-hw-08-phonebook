import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCurrentId } from './contactsSlice';
import { goItApi } from './auth/operations';

// axios.defaults.baseURL = 'https://654a2082e182221f8d528c04.mockapi.io/';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchDataThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await goItApi.get('contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkApi) => {
    try {
      thunkApi.dispatch(setCurrentId(id));
      const { data } = await goItApi.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await goItApi.post('contacts', contact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
