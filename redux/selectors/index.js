import {createSelector} from 'reselect';

export const selectStore = state => state.city;
export const selectSelf = createSelector(selectStore, state => state);