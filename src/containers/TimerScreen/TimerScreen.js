import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {useDispatch} from 'react-redux';
import {getWeatherAction} from '../../models/actions/actions';

const seconds = 900;

const TimerScreen = () => {
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [timerOn, setTimerOn] = useState(false);
  const [secondsToUpdate, setSecondsToUpdate] = useState(15);
  const dispatch = useDispatch();
  //создать таймер на 1 час для обновления погоды

  useEffect(() => {
    if (secondsToUpdate > 0) {
      setTimeout(() => setSecondsToUpdate(secondsToUpdate - 1), 1000);
      console.log(secondsToUpdate);
    } else {
      console.log('dispatch action');
      setSecondsToUpdate(15);
    }
  }, [secondsToUpdate]);

  useEffect(() => {
    if (timerOn) {
      startTimer();
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0) {
      stopTimer();
      dispatch(getWeatherAction);
      console.log('Get Weather Update');
      setSecondsLeft(10);
      startTimer();
    }
  }, [secondsLeft]);

  const toggleTimer = () => setTimerOn(timerOn => !timerOn);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(secs => {
        if (secs > 0) {
          return secs - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    BackgroundTimer.stopBackgroundTimer();
  };

  let sec = Math.floor(secondsLeft % 60);
  let minutes = Math.floor(secondsLeft / 60);
  let hour = Math.floor(minutes / 60);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {hour} : {minutes} : {sec}
      </Text>
      <Button title="Start/Stop" onPress={toggleTimer} />
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
