import { SET_LIGHT } from '../actions/types';

export default function(state = { on: false }, action) {
  console.log('state ', state);
  switch (action.type) {
    case SET_LIGHT:
      return { ...state, on: action.payload };
    default:
      return state;
  }
}
