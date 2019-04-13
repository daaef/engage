import {CREATE_EVENT } from "../../actions/types";

export const createEvent = payload => {
  return {
    type: CREATE_EVENT,
    payload: payload
  };
};