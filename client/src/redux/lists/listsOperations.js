import axios from 'axios';
import {
  createCardError,
  createCardRequest,
  createCardSuccess,
  listPatchError,
  listPatchRequest,
  listPatchSuccess,
  listsError,
  listsRequest,
  listsSuccess
} from './listsActions';
// import {getToken} from './listsSelectors';

axios.defaults.baseURL = '/api/v1';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const listsHandler = id => dispatch => {
  dispatch(listsRequest());
  return axios
      .get(`/boards/get/${id}`)
      .then(response => {
        return dispatch(listsSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(listsError(error)));
};

export const handlePatchList = (id, lists) => dispatch => {
  dispatch(listPatchRequest());
  return axios
      .patch(`/boards/patch/${id}`, {lists})
      .then(response => {
        console.log('lists response ', response.data.board.lists)
        return dispatch(listPatchSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(listPatchError(error)));
};


export const handleCreateCards = (id, card) => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post(`/cards/create`, {id, card})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};


