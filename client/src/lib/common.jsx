import axios from 'axios';
export function storeTokenInLocalStorage(data) {
  localStorage.setItem('token', data.accessToken);
  localStorage.setItem('data', JSON.stringify(data.user));

}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export function getDataFromLocalStorage() {
  return localStorage.getItem('data');
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = null ;
  try {
    const token = getTokenFromLocalStorage();
    const data = getDataFromLocalStorage();

    if (!token) {
      return defaultReturnObject;
    }
     return data;
  }
  catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}