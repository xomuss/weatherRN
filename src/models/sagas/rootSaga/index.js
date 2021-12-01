import {all, takeLatest} from 'redux-saga/effects';
import {getWeatherAction, getWeatherByTimerAction} from 'src/models/actions/actions';
import {getWeatherSaga} from 'src/models/sagas/weatherSaga';

export default function* rootSaga() {
  yield all([takeLatest([getWeatherAction.type, getWeatherByTimerAction.type], getWeatherSaga)]);
}
