import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from 'src/models/store';
import WeatherScreen from 'src/containers/WeatherScreen/WeatherScreen';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <WeatherScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
