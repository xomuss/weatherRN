import {call, put, select} from 'redux-saga/effects';
import {selectCity} from 'src/models/selectors';
import {getWeatherSuccessAction} from 'src/models/actions/actions';
import {fetchApi} from 'src/api';

export function* getWeatherSaga() {
  try {
    const city = yield select(selectCity);

    const weather = yield call(fetchApi, city);

    yield put(getWeatherSuccessAction(weather));
  } catch (e) {
    console.info('getWeatherSaga error - ', e);
  }
}
