import {CREATE_EVENT, GET_ERRORS, GET_EVENTS} from "../../actions/types";
import axios from "axios";

export const deleteEvent= id => dispatch => {
  console.log("about to delete Event");
  axios
    .delete(`https://cryptic-meadow-10798.herokuapp.com/api/event/delete/${id}`)
    .then(()=>{
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
    })
};