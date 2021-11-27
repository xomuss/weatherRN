import {create} from 'apisauce';

class BaseApi {
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  api;

  constructor() {
    this.apiKey = '96cf02d112b4fc5940b46111ac1a89e0';
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
