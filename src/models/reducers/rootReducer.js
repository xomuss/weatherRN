import {combineReducers} from 'redux';
import weatherReducer from 'src/models/reducers/weatherReducer';

export default combineReducers({
  weatherState: weatherReducer,
});
