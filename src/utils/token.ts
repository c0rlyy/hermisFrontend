export const getToken = () => sessionStorage.getItem('authToken');
export const setToken = (token) => sessionStorage.setItem('authToken', token);
export const clearToken = () => sessionStorage.removeItem('authToken');
