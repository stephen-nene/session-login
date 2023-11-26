// appAction.js

export const setDarkMode = () => {
  return{
    type: 'SET_DARK_MODE'
  }
}

export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    payload: users
  };
};
export const addNewUser = (user) => {
  return {
    type: 'ADD_NEW_USER',
    payload: user
  };
};