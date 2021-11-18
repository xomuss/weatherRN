import {useSelector} from 'react-redux';
import {View} from 'react-native';

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
    <View>
      <View>
        {weather.name}, {weather.sys.country}
      </View>
      <View>{dateBuilder(new Date())}</View>
    </View>
  );
}

export default Location;
