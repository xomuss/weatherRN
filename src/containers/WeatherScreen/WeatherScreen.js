import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {getWeatherAction, setCity} from '../../models/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import Selectors from '../../models/selectors';

const WeatherScreen = () => {
  const dispatch = useDispatch();

  const dateBuilder = d => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  // ----------- Selectors ---------- //
  const weatherData = useSelector(Selectors.selectWeather);

  // ----------- Handlers ----------- //
  const onPressGetWeather = () => {
    dispatch(getWeatherAction);
  };

  const onInputChange = text => {
    dispatch(setCity(text));
  };

  // ---------- Render methods ------- //
  const renderFormInputGetWeather = () => {
    return (
      <>
        <TextInput onChangeText={onInputChange} placeholder={'Search...'} />
        <Button title="Get Weather" onPress={onPressGetWeather} />
      </>
    );
  };

  const renderDateBuilder = () => <Text>{dateBuilder(new Date())}</Text>;

  const renderWeatherLocation = () => {
    return (
      weatherData &&
      weatherData.name &&
      weatherData.sys &&
      weatherData.sys.country && (
        <View>
          <Text>
            {weatherData.name}, {weatherData.sys.country}
          </Text>
          {renderDateBuilder()}
        </View>
      )
    );
  };

  const renderWeatherWidget = () => {
    return (
      weatherData &&
      weatherData.main &&
      weatherData.main.temp &&
      weatherData.weather &&
      weatherData.weather[0].main && (
        <View>
          <Text>{Math.round(weatherData.main.temp)} °C</Text>
          <Text>{weatherData.weather[0].main}</Text>
        </View>
      )
    );
  };

  return (
    <>
      {renderFormInputGetWeather()}
      {renderWeatherLocation()}
      {renderWeatherWidget()}
    </>
  );
};

export default WeatherScreen;
