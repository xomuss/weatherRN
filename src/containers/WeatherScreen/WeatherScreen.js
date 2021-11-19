import React from 'react';
import Form from 'src/shared/components/Form';
import Location from 'src/shared/components/Location';
import WeatherVidget from 'src/shared/components/WeatherVidget';

const WeatherScreen = () => {
  return (
    <>
      <Form />
      <Location />
      <WeatherVidget />
    </>
  );
};

export default WeatherScreen;
