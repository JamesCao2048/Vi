import Cookies from 'js-cookie';

const TokenKey = 'token';

export function getToken() {
  let token = Cookies.get(TokenKey);
  if (token) {
    return token;
  } else {
    return false;
  }
  // return Cookies.get(TokenKey)
}

export function getTokenType(tokenType) {
  return Cookies.get('token_type');
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}
export function setTokenType(tokenType) {
  return Cookies.set('token_type', tokenType);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}
