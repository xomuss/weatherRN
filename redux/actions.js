export const weatherRequest = {
  type: 'weather/request',
};

export const queryParam = query => ({
  type: 'queryParam',
  payload: query,
});
