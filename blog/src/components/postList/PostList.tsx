import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../../store/index';
import { PostActions } from '../../actions/posts-action';
import UserHeader from '../userHeader/UserHeader';

interface PostListProps extends React.HtmlHTMLAttributes<{}> {}

export const PostList: React.FC<PostListProps> = (props: PostListProps) => {
  const posts = useSelector((state: StoreState) => state.posts.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(PostActions.fetchPost());
  }, [dispatch]);

  return (
    <React.Fragment>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.body}
            <UserHeader userId={post.userId} />
            <hr />
          </div>
        );
      })}
    </React.Fragment>
  );
};

PostList.defaultProps = {};
