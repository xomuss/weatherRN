const api = {
  key: '96cf02d112b4fc5940b46111ac1a89e0',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export async function fetchApi(pattern) {
  const request = await fetch(`${api.base}weather?q=${pattern}&units=metric&appid=${api.key}`);

  return await request.json();
}
