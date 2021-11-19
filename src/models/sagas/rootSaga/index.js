import {all, takeLatest} from 'redux-saga/effects';
import {getWeatherAction} from 'src/models/actions/actions';
import {getWeatherSaga} from 'src/models/sagas/weatherSaga';

function* watcherSaga() {
  yield takeLatest(getWeatherAction, getWeatherSaga);
}

export default function* rootSaga() {
  yield all([watcherSaga]);
}
