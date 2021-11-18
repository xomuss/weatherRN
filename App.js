import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import Form from './components/Form';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {weather, selectSelf} from './redux/selectors';
import {selectStore} from './redux/selectors';

import Location from './components/Location';
import Weather from './components/Weather';
console.log(selectStore);
const App = () => {
  // const weather = useSelector(state => state.weather);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Form />
        <Location />
        {/*<Weather />*/}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
