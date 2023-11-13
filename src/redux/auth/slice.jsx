const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
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
  error: null,
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
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
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(logoutThunk.pending, refreshThunk.pending),
        (state, { payload }) => {
          state.isRefreshing = true;
          state.error = '';
        }
      )
      .addMatcher(
        isAnyOf(
          logoutThunk.rejected,
          refreshThunk.rejected
          // loginThunk.rejected
        ),
        (state, { payload }) => {
          state.isRefreshing = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.user.name = payload.user.name;
          state.user.email = payload.user.email;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.error = '';
        }
      );
  },
});

export const authReducer = slice.reducer;
