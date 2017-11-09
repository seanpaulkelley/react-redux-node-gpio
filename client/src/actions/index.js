import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS, SET_PIN, GET_PIN } from './types';

export const setPin = pinStatus => async dispatch => {
  console.log('real pin to post', Number(pinStatus));
  const res = await axios.post('/api/pins/18/' + pinStatus);
  //console.log('pins response ', res.data);
  dispatch({ type: SET_PIN, payload: res.data });
};

export const getPin = () => async dispatch => {
  const res = await axios.get('/api/pins');
  //console.log('pins res ', res.data);
  dispatch({ type: GET_PIN, payload: res.data });
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
