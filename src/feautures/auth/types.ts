export interface AuthState {
  isLoggedIn: boolean;
  user: AuthUser | null;
}

export interface AuthUser {
  authenticationToken: string;
  expiresAt: string;
  refreshToken: string;
  role: string;
  username: string;
}
