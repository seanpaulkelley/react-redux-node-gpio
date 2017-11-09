import { SET_PIN, GET_PIN } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_PIN:
      return { ...state, real: action.payload };
    case GET_PIN:
      return { ...state, real: action.payload };
    default:
      return state;
  }
}
