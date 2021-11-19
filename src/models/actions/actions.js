export const getWeatherAction = {
  type: 'weather/request',
};

export const getWeatherSuccessAction = weatherData => ({
  type: 'weather/requestSuccess',
  payload: weatherData,
});

export const postQueryParamAction = query => ({
  type: 'queryParam',
  payload: query,
});
