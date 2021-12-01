import {call, put, select} from 'redux-saga/effects';
import {getWeatherSuccessAction, getWeatherFailure} from 'src/models/actions/actions';
import Selectors from '../../selectors';
import WeatherApi from '../../../api/WeatherApi/WeatherApi';

export function* getWeatherSaga(action) {
  try {
    const cityFromSelector = yield select(Selectors.selectCity);
    let city;

    if (action.payload) {
      city = action.payload;
    } else {
      city = cityFromSelector;
    }

    const weather = yield call(WeatherApi.getWeather, city);

    if (weather.data) {
      yield put(getWeatherSuccessAction(weather.data));
    }
  } catch (e) {
    yield put(getWeatherFailure(e.message));
  }
}
