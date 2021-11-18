import {Button, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {queryParam, weatherRequest} from '../redux/actions';

const Form = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(weatherRequest);
  };

  const onInputChange = text => {
    dispatch(queryParam(text));
  };

  return (
    <View>
      <TextInput onChangeText={onInputChange} placeholder={'Search...'} />
      <Button title="Get Weather" onPress={onButtonClick} />
    </View>
  );
};

export default Form;
