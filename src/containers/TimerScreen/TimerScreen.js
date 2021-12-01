import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import {useDispatch} from 'react-redux';
import {getWeatherAction, getWeatherByTimerAction} from '../../models/actions/actions';

const hour = 3601;

const TimerScreen = () => {
  const [secondsLeft, setSecondsLeft] = useState(hour);
  const [timerOn, setTimerOn] = useState(false);
  const dispatch = useDispatch();
  //создать таймер на 1 час для обновления погоды

  // useEffect(() => {
  //   let timerId = setInterval(() => {
  //     dispatch(getWeatherByTimerAction);
  //   }, 2000);
  //
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // });

  useEffect(() => {
    if (timerOn) {
      startTimer();
    } else {
      BackgroundTimer.stopBackgroundTimer();
    }

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [timerOn]);

  useEffect(() => {
    if (secondsLeft === 0) {
      BackgroundTimer.stopBackgroundTimer();
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

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);
    let displayHours = hours < 10 ? `0${hours}` : hours;
    let displayMins = mins < 10 ? `0${mins}` : mins;
    let displaySecs = seconds < 10 ? `0${seconds}` : seconds;
    return {
      displayHours,
      displayMins,
      displaySecs,
    };
  };

  const hoursUi = `${clockify().displayHours} Hours`;
  const minsUi = `${clockify().displayMins} Mins`;
  const secsUi = `${clockify().displaySecs} Secs`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {hoursUi} {minsUi} {secsUi}
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
