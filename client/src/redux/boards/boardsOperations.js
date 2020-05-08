import axios from 'axios';
import {
  boardsError,
  boardsRequest,
  boardsSuccess
} from './boardsActions';

axios.defaults.baseURL = '/api/v1/';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};


export const boardsCreate = credentials => dispatch => {
  dispatch(boardsRequest());
  return axios
      .post('/boards/create', credentials)
      .then(response => {
        return dispatch(boardsSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardsError(error)));
};

export const getBoardsAll = credentials => dispatch => {
  dispatch(boardsRequest());
  return axios
      .get('/boards/all')
      .then(response => {
        console.log('boards response ', response.data.boards)
        return dispatch(boardsSuccess(response.data.boards));
      })
      .catch(error => dispatch(boardsError(error)));
};