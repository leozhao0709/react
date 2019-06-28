import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/index';
import { PostActions } from '../../actions/posts-action';
import UserHeader from '../userHeader/UserHeader';
import { UserActions } from '../../actions/user-action';

interface PostListProps extends React.HtmlHTMLAttributes<{}> {}

export const PostList: React.FC<PostListProps> = (props: PostListProps) => {
  const posts = useSelector((state: StoreState) => state.postsState.posts);
  const users = useSelector((state: StoreState) => state.usersState.users);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(PostActions.fetchPostAndUser());
  }, [dispatch]);
  console.log('...render posts...');
  return (
    <React.Fragment>
      {posts.map((post, index) => {
        return (
          <div key={post.id}>
            {index}. {post.body}
            <UserHeader user={users.find(user => user.id === post.userId)} />
            <hr />
          </div>
        );
      })}
    </React.Fragment>
  );
};

PostList.defaultProps = {};
