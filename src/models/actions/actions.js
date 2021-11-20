export const getWeatherAction = {
  type: 'weather/request',
};

export const getWeatherSuccessAction = weatherData => ({
  type: 'weather/requestSuccess',
  payload: weatherData,
});

export const setCity = city => ({
  type: 'weather/setCity',
  payload: city,
});
