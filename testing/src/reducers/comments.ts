import { CommentsAction, CommentsActionType } from '../actions/commentsAction';

export interface CommentsState {
  comments: string[];
}

const initialState: CommentsState = {
  comments: []
};

const CommentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
  switch (action.type) {
    case CommentsActionType.SAVE_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, action.payload! as string]
      };
    case CommentsActionType.FETCH_COMMENTS:
      return {
        ...state,
        comments: [...state.comments, ...(action.payload! as string[])]
      };
    default:
      return state;
  }
};

export default CommentsReducer;
