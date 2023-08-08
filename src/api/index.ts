import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

import { API_URL } from '../config/apiConfig';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: 'include',
  paramsSerializer: (params) => queryString.stringify(params),
});

export const baseQueryWithLogout: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};
