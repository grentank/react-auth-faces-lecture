import { ADD_POST, ADD_POSTS, DELETE_POST } from '../types';

const postsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POSTS:
      return payload;
    case ADD_POST:
      return [...state, payload];
    case DELETE_POST:
      return state.filter((el) => el.id !== payload);
    default:
      return state;
  }
};

export default postsReducer;
