import axios from 'axios';
import {
  listsRequest, listsSuccess, listsError, listPatchRequest, listPatchSuccess, listPatchError
} from './listsActions';
// import {getToken} from './listsSelectors';

axios.defaults.baseURL = '/api/v1';

const setAuthToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const clearAuthToken = () => {
  axios.defaults.headers.common.Authorization = null;
};

export const listsHandler = credentials => dispatch => {
  dispatch(listsRequest());
  return axios
      .get(`/boards/get/${credentials}`)
      .then(response => {
        console.log(response.data)
        return dispatch(listsSuccess(response.data.board.lists));
      })
      .catch(error => dispatch(listsError(error)));
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


