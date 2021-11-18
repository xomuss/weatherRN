import {useSelector} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';
import React from 'react';

function Weather() {
  const weather = useSelector(state => state.weather);

  return (
    <>
      {weather !== 'undefined' && (
        <View style={styles.weatherBox}>
          <Text>{Math.round(weather.main.temp)} °C</Text>
          <Text>{weather.weather[0].main}</Text>
          <Text>{weather.weather[0].description}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  weatherBox: {
    flex: 1,
    textAlign: 'center',
  },

  // weather-box .temp {
  //   position: relative;
  //   display: inline-block;
  //   margin: 30px auto;
  //   background-color: rgba(255, 255, 255, 0.2);
  //   border-radius: 16px;
  //
  //   padding: 15px 25px;
  //
  //   color: #fff;
  //   font-size: 102px;
  //   font-weight: 900;
  //
  //   text-shadow: 3px 6px rgba(50, 50, 70, 0.5);
  //   text-align: center;
  //   box-shadow: 3px 6px rgba(0, 0, 0, 0.2);
  // }
  //
  // weather-box .weather {
  //   color: #fff;
  //   font-size: 48px;
  //   font-weight: 700;
  //   text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  // }
  //
  // description {
  //   color: #fff;
  //   font-size: 18px;
  // }
});

export default Weather;
