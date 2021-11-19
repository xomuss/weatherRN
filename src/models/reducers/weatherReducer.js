export const INITIAL_STATE = {
  weather: {},
  city: '',
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'weather/requestSuccess':
      return {
        ...state,
        weather: action.payload,
      };

    case 'weather/setCity':
      return {...state, city: action.payload};

    default:
      return state;
  }
};

export default weatherReducer;
