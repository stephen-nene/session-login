// userReducer.js
const initialState = {
  loggedIn: false,
  userData: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'SIGNUP':
      return {
        loggedIn: true,
        userData: action.payload,
      };

    case 'LOGOUT':
      return {
        loggedIn: false,
        userData: null,
      };

    default:
      return state;
  }
};


export default userReducer;
