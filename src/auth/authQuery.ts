import { QueryClient } from "react-query";

const TOKEN_KEY = ["accessToken"] as const;

// We'll use a singleton queryClient instance (safe in v4)
let _queryClient: QueryClient | null = null;

export const setQueryClientForAuth = (qc: QueryClient) => {
  _queryClient = qc;
};

export const setAccessToken = (token: string | null) => {
  if (!_queryClient) {
    console.warn("QueryClient not set — token will be lost on refresh");
  }
  _queryClient?.setQueryData(TOKEN_KEY, token);
};

export const getAccessToken = (): string | null => {
  return _queryClient?.getQueryData(TOKEN_KEY) ?? null;
};

export const clearAccessToken = () => {
  _queryClient?.setQueryData(TOKEN_KEY, null);
};