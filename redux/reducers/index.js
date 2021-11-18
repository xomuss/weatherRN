export const initialState = {
  weather: {},
  city: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'weather/requestSuccess':
      return {
        ...initialState,
        weather: action.payload,
      };

    case 'queryParam':
      return {...initialState, city: action.payload};

    default:
      return state;
  }
}
