const { createSlice, isAnyOf, createReducer } = require('@reduxjs/toolkit');
const {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} = require('./operations');

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
