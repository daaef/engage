import {CREATE_EVENT, GET_ERRORS} from "../../actions/types";
import axios from "axios";
import store from "../index";
import {getEvents} from "./getEvents";

export const createEvent= (eventData, config) => dispatch => {
  const url = 'https://cryptic-meadow-10798.herokuapp.com/api/event/create';
  axios
  .post(url, eventData, config)
  .then(res => {
    console.log(res);
  })
  .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  );
  return {
    type: CREATE_EVENT,
    payload: eventData
  };
};