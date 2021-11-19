import {createSelector} from 'reselect';

export const selectState = state => state;

export const selectCity = createSelector(selectState, state => state.city);
export const selectWeather = createSelector(selectState, state => state.weather);

export default {
  selectCity,
  selectWeather,
};
