import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import lightReducer from './lightReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  light: lightReducer
});
