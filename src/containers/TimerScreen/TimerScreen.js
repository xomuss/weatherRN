import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

const TimerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>Time Left...</Text>
      <Button title="Start/Stop" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#000',
  },
  time: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
});

export default TimerScreen;
