import {create} from 'apisauce';

class BaseApi {
  apiKey: '96cf02d112b4fc5940b46111ac1a89e0';
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  api;

  constructor() {
    this.api = create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Accept-Language': 'en',
        Accept: 'application/json, text/plain, */*',
      },
    });
    this.api.axiosInstance.interceptors.request.use(
      config => {
        console.log('---config', config);
        // Do something before request is sent
        return config;
      },
      error => {
        // Do something with request error
        return Promise.reject(error);
      },
    );
  }
}

export default BaseApi;
