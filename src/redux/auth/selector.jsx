export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectRefresh = state => state.auth.isRefreshing;
export const selectError = state => state.auth.error;
