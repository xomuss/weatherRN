import {Button, TextInput, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {postQueryParamAction, getWeatherAction} from 'src/models/actions/actions';

const Form = () => {
  const dispatch = useDispatch();

  // ----------- Handlers ----------- //
  const onPressGetWeather = () => {
    dispatch(getWeatherAction);
  };

  const onInputChange = text => {
    dispatch(postQueryParamAction(text));
  };

  // ---------- Render methods ------- //
  const renderSearchInput = () => <TextInput onChangeText={onInputChange} placeholder={'Search...'} />;

  const renderGetWeatherButton = () => <Button title="Get Weather" onPress={onPressGetWeather} />;

  return (
    <View>
      {renderSearchInput()}
      {renderGetWeatherButton()}
    </View>
  );
};

export default Form;
