import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authApi from '~/api/auth/api';

import type { AuthState } from './types';

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const { logout, setUser } = authSlice.actions;

export const authReducer = persistReducer(
  {
    key: 'rtk:auth',
    storage,
    whitelist: ['user', 'isLoggedIn'],
  },
  authSlice.reducer,
);
