import {createSelector} from 'reselect';

export const selectState = state => state;

export const selectStateCity = state => state.city;
export const selectCity = createSelector(selectStateCity, state => state.city);
export const selectWeather = createSelector(selectState, state => state.weather);

export default {
  selectCity,
  selectWeather,
};
