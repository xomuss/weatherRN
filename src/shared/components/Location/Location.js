import {useSelector} from 'react-redux';
import {Text, View} from 'react-native';
import React from 'react';
import Selectors from 'src/models/selectors/index';

const Location = () => {
  // ----------- Selectors ---------- //
  const weatherData = useSelector(Selectors.selectWeather);

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

  // -------- Render methods -------- //
  const renderDateBuilder = () => <Text>{dateBuilder(new Date())}</Text>;

  return (
    <>
      {weatherData ? (
        <View>
          <Text>
            {weatherData.name}, {weatherData.sys.country}
          </Text>
          {renderDateBuilder()}
        </View>
      ) : (
        <Text>NO</Text>
      )}
    </>
  );
};

export default Location;
