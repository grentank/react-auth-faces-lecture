import axios from 'axios';
import { ADD_POSTS, DELETE_POST } from '../types';

export const addPosts = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => dispatch({
      type: ADD_POSTS,
      payload: res.data,
    }));
};

export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});
