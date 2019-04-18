import {CREATE_EVENT, GET_ERRORS, GET_EVENTS} from "../../actions/types";
import axios from "axios";

let event;

export const getEvents= () => dispatch => {
  console.log("about to run Axios");
    axios
    .get('https://cryptic-meadow-10798.herokuapp.com/api/event/events')
    .then(res=>{
      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    })
  .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      console.log(err.response);
    }
  );
};