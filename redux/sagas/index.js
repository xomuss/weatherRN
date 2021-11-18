import {takeEvery, fork, call, put, select} from 'redux-saga/effects';
import {selectSelf} from '../selectors';

const api = {
  key: '96cf02d112b4fc5940b46111ac1a89e0',
  base: 'https://api.openweathermap.org/data/2.5/',
};

async function fetchApi(pattern) {
  const request = await fetch(
    `${api.base}weather?q=${pattern}&units=metric&appid=${api.key}`,
  );
  const data = await request.json();

  return data;
}

export function* workerSaga() {
  const city = yield select(selectSelf);
  const weather = yield call(fetchApi, city);
  yield put({type: 'weather/requestSuccess', payload: weather});
  console.log('sss', weather);
}

export function* watcherSaga() {
  yield takeEvery('weather/request', workerSaga);
}

export default function* rootSaga() {
  yield call(watcherSaga);
}
