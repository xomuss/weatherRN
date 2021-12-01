import {all, takeLatest} from 'redux-saga/effects';
import {getWeatherAction} from 'src/models/actions/actions';
import {getWeatherSaga} from 'src/models/sagas/weatherSaga';

export default function* rootSaga() {
  yield all([takeLatest(getWeatherAction.type, getWeatherSaga)]);
}
