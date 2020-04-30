import axios from 'axios';
import {
  signUpRequest,
  signUpSuccesss,
  signUpError,
  signInRequest,
  signInSuccesss,
  signInError,
  refreshUserRequest,
  logOutRequest,
  logOutSuccess,
  logOutError,
  refreshUserSuccess,
  refreshUserError,
} from './listsActions';
import {getToken} from './listsSelectors';
import {addLocalStorage} from '../../helpers/localStorage.helpers'

axios.defaults.baseURL = '/api/v1/auth';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  return axios
      .post('/register', credentials)
      .then(response => {
        // if (response.data.error) return dispatch(signUpError(response.data.error));
        addLocalStorage(response.data)
        setAuthToken(response.data.token)
        dispatch(signUpSuccesss(response.data));
        return dispatch(signInSuccesss(response.data));
      })
      .catch(error => dispatch(signUpError(error)));
};

export const login = credentials => dispatch => {
  dispatch(signInRequest());
  return axios
      .post('/login', credentials)
      .then(response => {
        addLocalStorage(response.data)
        setAuthToken(response.data.token)
        return dispatch(signInSuccesss(response.data));
      })
      .catch(error => dispatch(signInError(error)));
};

export const relogin = credentials => dispatch => {
  dispatch(signInRequest());
  return axios
      .get('/relogin', {headers : {Authorization : `Bearer ${credentials}`}})
      .then(response => {
        addLocalStorage(response.data)
        setAuthToken(response.data.token)
        return dispatch(signInSuccesss(response.data));
      })
      .catch(error => dispatch(signInError(error)))
};

export const signOut = () => (dispatch, getState) => {
  dispatch(logOutRequest());

  const token = getToken(getState());
  if (!token) return;
  setAuthToken(token);

  axios
      .get('logout')
      .then(() => {
        dispatch(logOutSuccess());
        clearAuthToken();
      })
      .catch(error => {
        dispatch(logOutError(error));
      });
};
