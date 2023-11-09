import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchDataThunk,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  deletedId: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContactAC: (state, { payload }) => {
      state.filter = payload;
    },
    setCurrentId: (state, { payload }) => {
      state.deletedId = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== payload.id
        );
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addMatcher(
        isAnyOf(
          fetchDataThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state, { payload }) => {
          state.contacts.isLoading = true;
          state.contacts.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchDataThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, { payload }) => {
          state.contacts.isLoading = false;
          state.contacts.error = payload;
        }
      );
  },
});

export const { addContact, deleteContact, filterContactAC, setCurrentId } =
  contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
