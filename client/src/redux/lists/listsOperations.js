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

// const setAuthToken = token => {
//   axios.defaults.headers.common.Authorization = token;
// };

// const clearAuthToken = () => {
//   axios.defaults.headers.common.Authorization = null;
// };

export const listsHandler = id => dispatch => {
  dispatch(listsRequest());
  return axios
      .get(`/boards/get/${id}`)
      .then(response => {
        return dispatch(listsSuccess(response.data.board.lists));
      })
      .catch(error => {
        console.log('error lists handler', error)
        return dispatch(listsError(error))
      });
};

export const handlePatchList = (id, lists) => dispatch => {
  dispatch(listPatchRequest());
  return axios
      .patch(`/boards/patch/${id}`, {lists})
      .then(response => {
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

export const handleCreateHomeCards = card => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post(`/cards/home/create`, {card})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};

export const handleCreateHomeLists = card => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post(`/lists/home/create`, {card})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};

export const handleChangeHomeListsTitle = form => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post(`/lists/home/update`, {form})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};

export const handleDeleteHomeList = form => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post(`/lists/home/delete`, {form})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};

export const handleDeleteHomeCard = form => dispatch => {
  dispatch(createCardRequest());
  return axios
      .post('/cards/home/delete', {form})
      .then(response => {
        return dispatch(createCardSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(createCardError(error)));
};


