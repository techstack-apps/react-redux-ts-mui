import { Dispatch } from "redux";
import {
  AuthActionsTypes,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGOUT
} from '../action-types/auth';


const mockUser = {
  username: "user",
  password: "user",
  name: "John",
  surname: "Doe",
  city: "New York"
}

export const login = (username: string, password: string) => async (
  dispatch: Dispatch<AuthActionsTypes>
) => {
  dispatch({
    type: LOGIN
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === mockUser.username && password === mockUser.password) {
        const { password: pass, ...rest } = mockUser
        localStorage.setItem("user", JSON.stringify(rest))
        dispatch({
          type: LOGIN_SUCCESS,
          payload: rest,
        });
        document.location.href = '/'
        resolve(rest);
      } else {
        const err = {
          error: 401,
          message: "The username or password is entered incorrectly"
        }
        dispatch({
          type: LOGIN_ERROR,
          payload: err,
        });
        reject(err);
      }
    }, 2000);
  });
};

export const resetLogin = () => (dispatch: Dispatch<AuthActionsTypes>) => {
  dispatch({
    type: LOGIN_RESET
  });
}

export const logout = () => (dispatch: Dispatch<AuthActionsTypes>) => {
  localStorage.removeItem("user");
  dispatch({
    type: LOGOUT
  });
  document.location.href = '/login'
}