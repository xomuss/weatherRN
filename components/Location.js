import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
// import {weather} from '../redux/selectors';
import React from 'react';

function Location() {
  const weather = useSelector(state => state.weather);

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
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <>
      {typeof weather.main !== 'undefined' ? (
        <View>
          <Text>
            {weather.name}, {weather.sys.country}
          </Text>
          <Text>{dateBuilder(new Date())}</Text>
        </View>
      ) : (
        <Text>NO</Text>
      )}
    </>
  );
}

export default Location;
