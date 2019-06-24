import { Dispatch } from 'redux';
import axios from 'axios';

export enum PostActionType {
  FETCH_POSTS = 'FETCH_POSTS'
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostAction {
  type: PostActionType;
  payload?: Post[] | {};
}

export const PostActions = {
  fetchPost: () => {
    return async (dispatch: Dispatch) => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: PostActionType.FETCH_POSTS,
        payload: res.data
      });
    };
  }
};
