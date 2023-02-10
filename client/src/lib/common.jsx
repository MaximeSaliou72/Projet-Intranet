import axios from 'axios';
export function storeTokenInLocalStorage(data) {
  localStorage.setItem('token', data.accessToken);
  localStorage.setItem('id', data.user.id);

}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export function getIdFromLocalStorage() {
  return localStorage.getItem('id');
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    const id = getIdFromLocalStorage();

    if (!token) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: 'GET',
      url: `http://localhost:8080/app/user/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    return response.data;
  }
  catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}