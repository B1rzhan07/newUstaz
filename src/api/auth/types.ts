import { AuthUser } from '~/feautures/auth/types';

export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
  data: {
    user: AuthUser;
  };
  status: number;
}

export interface CSRFResponse {
  _csrf: string;
}
