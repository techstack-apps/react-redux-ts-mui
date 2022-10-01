import {
  AuthState,
  AuthActionsTypes,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_RESET,
  LOGOUT
} from '../action-types/auth';

const storage = localStorage.getItem('user')
const data = storage ? JSON.parse(storage) : null
const initialState: AuthState = {
  data: data,
  error: null,
  loading: false
};

export default function authReducer(
  state = initialState,
  action: AuthActionsTypes
): AuthState {
  switch (action.type) {
    case LOGIN:
      return {
        data: null,
        error: null,
        loading: true
      };
    case LOGIN_SUCCESS: {
      return {
        data: action.payload,
        error: null,
        loading: false
      };
    }
    case LOGIN_ERROR: {
      return {
        data: null,
        error: action.payload,
        loading: false
      };
    }
    case LOGIN_RESET: {
      return {
        data: null,
        error: null,
        loading: false
      };
    }
    case LOGOUT: {
      return {
        data: null,
        error: null,
        loading: false
      };
    }
    default:
      return state;
  }
}