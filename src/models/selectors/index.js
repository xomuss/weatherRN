import {createSelector} from 'reselect';
import {stat} from '@babel/core/lib/gensync-utils/fs';

const State = state => state.weatherState;

const selectCity = createSelector(State, state => state.city);
const selectWeather = createSelector(State, state => state.weather);

export default {
  selectCity,
  selectWeather,
};
