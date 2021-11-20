import {createSelector} from 'reselect';

const State = state => state.weatherState;

const selectCity = createSelector(State, state => state.city);
const selectWeather = createSelector(State, state => state.weather);

export default {
  selectCity,
  selectWeather,
};
