const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_DARK_MODE':
      localStorage.setItem('darkMode', !state.darkMode);
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      }

    case 'ADD_NEW_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };


    default:
      return state;
  }
};

export default appReducer;
