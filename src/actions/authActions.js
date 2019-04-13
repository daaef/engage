import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  console.log("loginuser was ran");
  axios
    .post('https://cryptic-meadow-10798.herokuapp.com/api/admin/login', userData)
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      console.log(token, res.data);
      // Set token to ls
      if (token){
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      let decoded;
      setAuthToken(token);
      // Decode token to get user data
      decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    } else console.log(token)
    })
    .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      console.log(err.response)
      }
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
