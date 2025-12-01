export const HOST = import.meta.env.VITE_HOST;
export const AUTH_HEADER = import.meta.env.VITE_AUTHORISE_HEADER;

export const PROFILE_API_RANDOM = `${HOST}/api/profile/random`;
export const PROFILE_API_CREATE = `${HOST}/api/profile/create`;
export const PROFILE_API_UPDATE = `${HOST}/api/profile/update`;
export const PROFILE_API_ID = `${HOST}/api/profile/id`;

export const MATCH_API_DELETE_BY_ID = `${HOST}/api/match/delete-by-id`;
export const MATCH_API_PROFILES = `${HOST}/api/match/profiles`;
export const MATCH_API_CREATE = `${HOST}/api/match/create`;
export const MATCH_API_ALL = `${HOST}/api/matches/all`;