import { Dispatch } from 'redux';
import axios from 'axios';
import { StoreState } from '../store';
import { UserActionType } from './user-action';

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
  // fetchPost: () => {
  //   return async (dispatch: Dispatch) => {
  //     const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data as Post[];
  //     await dispatch({
  //       type: PostActionType.FETCH_POSTS,
  //       payload: posts
  //     });
  //   };
  // }

  fetchPostAndUser: () => {
    return async (dispatch: Dispatch, getState: () => StoreState) => {
      const posts = (await axios.get('https://jsonplaceholder.typicode.com/posts')).data as Post[];

      const userIds = posts.reduce(
        (prev, curr) => (prev.includes(curr.userId) ? prev : [...prev, curr.userId]),
        [] as number[]
      );

      const users = await Promise.all(
        userIds.map(async userId => (await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)).data)
      );

      dispatch({
        type: PostActionType.FETCH_POSTS,
        payload: posts
      });

      dispatch({
        type: UserActionType.FETCH_USERS,
        payload: users
      });
    };
  }
};
