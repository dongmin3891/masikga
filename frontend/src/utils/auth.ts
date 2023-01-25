import { Cookies } from 'react-cookie';
const cookies = new Cookies();

export const setRefreshTokenToCookie = (refresh_token) => {
  cookies.set('refresh_token', refresh_token)
}

export const getRefreshTokenToCookie = () => {
  return cookies.get('refresh_token');
}

export const removeCookie = (name) => {
  cookies.remove(name);
}