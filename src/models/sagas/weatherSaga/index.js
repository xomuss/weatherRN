import {call, put, select} from 'redux-saga/effects';
import {getWeatherSuccessAction, getWeatherFailure} from 'src/models/actions/actions';
import Selectors from '../../selectors';
import WeatherApi from '../../../api/WeatherApi/WeatherApi';

export function* getWeatherSaga() {
  try {
    const city = yield select(Selectors.selectCity);
    console.log('-------- before call');
    const weather = yield call(WeatherApi.getWeather, city);
    console.log('-------- after call', weather);

    yield put(getWeatherSuccessAction(weather));
  } catch (e) {
    yield put(getWeatherFailure(e.message));
  }
}
