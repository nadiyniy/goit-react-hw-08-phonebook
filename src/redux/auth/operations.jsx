import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const goItApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const setToken = token => {
  goItApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = token => {
  goItApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credential, thunkApi) => {
    try {
      const { data } = await goItApi.post('users/signup', credential);
      setToken(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credential, thunkApi) => {
    try {
      const { data } = await goItApi.post('users/login', credential);
      setToken(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    const { data } = await goItApi.post('users/logout');
    clearToken();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkApi) => {
  const savedToken = goItApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue('Token is not exist');
  }
  try {
    const { data } = await goItApi.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
