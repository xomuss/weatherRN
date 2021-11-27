import BaseApi from '../BaseApi';

class WeatherApi extends BaseApi {
  constructor() {
    super();
  }

  getWeather = city => {
    return this.api.get(`weather?q=${city}&units=metric&appid=${this.apiKey}`);
  };
}

export default new WeatherApi();
