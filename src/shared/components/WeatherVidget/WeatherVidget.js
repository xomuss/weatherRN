import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './WeatherVidgetStyles';
import Selectors from 'src/models/selectors/index';

const WeatherVidget = () => {
  // ----------- Selectors ---------- //
  const weatherData = useSelector(Selectors.selectWeather);

  // -------- Render methods -------- //
  const renderTemperature = () => <Text>{Math.round(weatherData.main.temp)} °C</Text>;

  const renderTitle = () => <Text>{weatherData.weather[0].main}</Text>;

  const renderWeatherDescription = () => <Text>{weatherData.weather[0].main}</Text>;

  return (
    <>
      {weatherData ? (
        <View style={styles.weatherBox}>
          {renderTemperature()}
          {renderTitle()}
          {renderWeatherDescription()}
        </View>
      ) : (
        <Text>NO</Text>
      )}
    </>
  );
};

export default WeatherVidget;
