import axios from 'axios';
import { ADD_USER } from '../types';

export const userAdd = (value) => ({
  type: ADD_USER,
  payload: value,
});

export const userSignUp = (input) => (dispatch) => {
  axios.post('/api/user/signup', input)
    .then((res) => dispatch(userAdd(res.data)))
    .catch(console.log);
};

export const userCheck = () => (dispatch) => {
  axios.post('/api/user/check')
    .then((res) => dispatch(userAdd(res.data)))
    .catch(console.log);
};
