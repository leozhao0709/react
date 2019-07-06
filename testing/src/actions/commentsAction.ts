import axios from 'axios';
import { Dispatch } from 'redux';

export enum CommentsActionType {
  SAVE_COMMENTS = 'SAVE_COMMENTS',
  FETCH_COMMENTS = 'FETCH_COMMENTS'
}

export interface CommentsAction {
  type: CommentsActionType;
  payload?: string | string[];
}

export const CommentsActions = {
  saveComments: (comment: string) => {
    return {
      type: CommentsActionType.SAVE_COMMENTS,
      payload: comment
    };
  },
  fetchComments: () => {
    return async (dispatch: Dispatch) => {
      const comments = (await axios.get('https://jsonplaceholder.typicode.com/comments')).data.map(
        ({ name }: { name: string }) => name
      );
      dispatch({
        type: CommentsActionType.FETCH_COMMENTS,
        payload: comments
      });
    };
  }
};
