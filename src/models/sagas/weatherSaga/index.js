import {call, put, select} from 'redux-saga/effects';
import {selectStateCity} from 'src/models/selectors';
import {getWeatherSuccessAction} from 'src/models/actions/actions';
import {fetchApi} from 'src/api';

export function* getWeatherSaga() {
  try {
    const city = yield select(selectStateCity);
    console.log('---------', city);
    const weather = yield call(fetchApi, city);
    console.log('weather', weather);
    yield put(getWeatherSuccessAction(weather));
  } catch (e) {
    console.info('getWeatherSaga error - ', e);
  }
}
