export const getWeatherAction = {
  type: 'weather/request',
};

export const getWeatherSuccessAction = weatherData => ({
  type: 'weather/requestSuccess',
  payload: weatherData,
});

export const getWeatherFailure = error => ({
  type: 'weather/requestFailure',
  payload: error,
});

export const setCity = city => ({
  type: 'weather/setCity',
  payload: city,
});
