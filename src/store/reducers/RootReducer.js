import {combineReducers} from "redux/es/redux";
import authReducer from "../../reducers/authReducer";
import errorReducer from "../../reducers/errorReducer";
import loadingReducer from "../../reducers/loadingReducer";
import eventReducer from "../../reducers/eventReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  events: eventReducer,
  loading: loadingReducer
})