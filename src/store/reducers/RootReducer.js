import {combineReducers} from "redux/es/redux";
import authReducer from "../../reducers/authReducer";
import errorReducer from "../../reducers/errorReducer";
import themeReducer from "./themeReducer";
import loadingReducer from "../../reducers/loadingReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  light: themeReducer,
  loading: loadingReducer
})