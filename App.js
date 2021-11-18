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
import Location from './components/Location';

const App: () => Node = () => {
  // const weather = useSelector(state => state.weather);

  return (
    <Provider store={store}>
      <SafeAreaView>
        <Form />

        {/*{typeof weather.main != 'undefined' ? (*/}
        {/*  <View>*/}
        {/*    <Location />*/}
        {/*    /!*<Weather />*!/*/}
        {/*  </View>*/}
        {/*) : (*/}
        {/*  ''*/}
        {/*)}*/}
      </SafeAreaView>
    </Provider>
  );
};

export default App;
