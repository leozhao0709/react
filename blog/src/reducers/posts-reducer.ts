import { PostAction, PostActionType, Post } from '../actions/posts-action';

export interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: []
};

const PostReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case PostActionType.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload as Post[]
      };
    default:
      return state;
  }
};

export default PostReducer;
