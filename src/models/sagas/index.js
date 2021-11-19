import {call, put, select, takeLatest, all} from 'redux-saga/effects';
import {selectCity} from 'src/models/selectors';
import {getWeatherAction, getWeatherSuccessAction} from 'src/models/actions/actions';

const api = {
  key: '96cf02d112b4fc5940b46111ac1a89e0',
  base: 'https://api.openweathermap.org/data/2.5/',
};

async function fetchApi(pattern) {
  const request = await fetch(`${api.base}weather?q=${pattern}&units=metric&appid=${api.key}`);

  return await request.json();
}

export function* getWeatherSaga() {
  try {
    const city = yield select(selectCity);

    const weather = yield call(fetchApi, city);

    yield put(getWeatherSuccessAction(weather));
  } catch (e) {
    console.info('getWeatherSaga error - ', e);
  }
}

export function* watcherSaga() {
  yield takeLatest(getWeatherAction, getWeatherSaga);
}

export default function* rootSaga() {
  yield all([watcherSaga]);
}
