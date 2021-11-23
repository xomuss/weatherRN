import BaseApi from '../BaseApi';

class WeatherApi extends BaseApi {
  constructor() {
    super();
  }

  getWeather(pattern) {
    const response = this.api.get(`weather?q=${pattern}&units=metric&appid=${this.apiKey}`);
    console.log('------getWeather', response);
    return response;
  }
}

export default new WeatherApi();
