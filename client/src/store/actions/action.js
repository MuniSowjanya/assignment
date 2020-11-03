import actionTypes from '../constant/constants';

import {
    USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT
    
  } from '../constant/constants'
import _ from  "lodash"
import Axios from "axios"
import Cookie from 'js-cookie'

export const signin = (userdata) => async (dispatch) => {
    userdata = _.pick(userdata,["username","password"]);
    dispatch({ type: USER_SIGNIN_REQUEST, payload: userdata });
    try {
      const { data } = await Axios.post("http://localhost:5000/user/login", userdata);
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
    }
  }
    
  export const register = (userdata) => async (dispatch) => {
    userdata = _.pick(userdata,["username","password","email"]);
    dispatch({ type: USER_REGISTER_REQUEST, payload: userdata });
    try {
      const { data } = await Axios.post("http://localhost:5000/user/register", userdata);
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      Cookie.set('userInfo', JSON.stringify(data));
      console.log("Registration Return", data)
    } catch (error) {
      dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
    }
  }
  
  
    
  export const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_LOGOUT })
  }
export function changeState(updatevalue) {
    return dispatch => {
        dispatch({type:actionTypes.USER_NAME, payload:updatevalue})
    }
}
