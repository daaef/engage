import isEmpty from '../validation/is-empty';

import {CREATE_EVENT, GET_ERRORS, GET_EVENTS} from '../actions/types';
import {AxiosInstance as axios} from "axios";

const initialState = {
  events: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      };
    default:
      return state;
  }
}
