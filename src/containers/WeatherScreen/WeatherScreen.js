import React from 'react';
import {Button, ImageBackground, Text, TextInput, View} from 'react-native';
import {getWeatherAction, setCity} from '../../models/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import Selectors from '../../models/selectors';
import styles from './styles';

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
      <View style={styles.searchBox}>
        <TextInput style={styles.searchBar} onChangeText={onInputChange} placeholder={'Search...'} />
        <Button style={styles.searchBtn} title="Get Weather" onPress={onPressGetWeather} />
      </View>
    );
  };

  const renderDateBuilder = () => (
    <Text
      textShadowRadius={5}
      textShadowOffset={{width: 2, height: 2}}
      textShadowColor={'rgba(50, 50, 70, 0.5)'}
      style={styles.locationBoxDate}
    >
      {dateBuilder(new Date())}
    </Text>
  );

  const renderWeatherLocation = () => {
    return (
      weatherData &&
      weatherData.name &&
      weatherData.sys &&
      weatherData.sys.country && (
        <View>
          <Text style={styles.locationBoxText}>
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
      weatherData.weather[0].main &&
      weatherData.weather[0].description && (
        <View>
          <Text style={styles.weatherBoxTemp}>{Math.round(weatherData.main.temp)} °C</Text>
          <Text style={styles.weatherBoxMain}>{weatherData.weather[0].main}</Text>
          <Text style={styles.weatherBoxDesc}>{weatherData.weather[0].description}</Text>
        </View>
      )
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('../../essets/background-abstract-gradient-blue-cold-vector-7888335.jpeg')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={{paddingHorizontal: 20}}>
          {renderFormInputGetWeather()}
          {renderWeatherLocation()}
          {renderWeatherWidget()}
        </View>
      </ImageBackground>
    </View>
  );
};

export default WeatherScreen;
