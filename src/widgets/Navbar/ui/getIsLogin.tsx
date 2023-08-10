import { AppState } from '~/store';

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getIsLogin = (state: AppState) => state?.authSlice?.isLoggedIn || false;
